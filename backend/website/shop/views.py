from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.views import validate_api_key
from .models import product
from .models import catergory
from .models import orders
from .models import order_item
from user.models import User
from user.views import validate_session_key
import json


@csrf_exempt
def get_products(request):
    if request.method == "POST":
        return JsonResponse({'message': 'POST method not allowed'}, status=405)
    else:
        products = product.objects.all()
        product_list = []
        for p in products:
            product_list.append({
                'id': p.id,
                'name': p.name,
                'description': p.description,
                'image': p.image,
                'price': p.price,
                'quantity': p.quantity,
                'categories': [category.name for category in p.catergory.all()]  # Fetching category names
            })
        return JsonResponse({'data': product_list}, safe=False)

@csrf_exempt
def get_product_by_id(request, pid):
    if request.method == "POST":
        return JsonResponse({'message': 'POST method not allowed'}, status=405)
    else:
        products = product.objects.filter(id=pid)
        product_list = []
        for p in products:
            product_list.append({
                'id': p.id,
                'name': p.name,
                'description': p.description,
                'image': p.image,
                'price': p.price,
                'quantity': p.quantity,
                'categories': [category.name for category in p.catergory.all()]  # Fetching category names
            })
        return JsonResponse({'data': product_list}, safe=False)

@csrf_exempt
def get_categories(request):
    if request.method == "POST":
        return JsonResponse({'message': 'POST method not allowed'}, status=405)
    else:
        cate = list(catergory.objects.all().values())
        return JsonResponse({'data': cate}, safe=False)

@csrf_exempt
def get_categories_products(request, id):
    if request.method == "POST":
        return JsonResponse({'message': 'POST method not allowed'}, status=405)
    else:
        try:
            cate = catergory.objects.get(id=id)
            products = cate.products.all()  # Assuming a related name `products` exists
            serialized_products = [
                {
                    "id": product.id,
                    "name": product.name,
                    "price": product.price,
                    'description': product.description,
                    'image': product.image,
                    'quantity': product.quantity,
                    'categories': [category.name for category in product.catergory.all()]
                }
                for product in products
            ]
            return JsonResponse({'data': serialized_products}, safe=False)
        except catergory.DoesNotExist:
            return JsonResponse({'message': 'No Products found '}, status=405)


@validate_session_key
@validate_api_key
@csrf_exempt
def manage_order(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user_id = data.get("user_id")
            address_line_1 = data.get("address_line_1")
            address_line_2 = data.get("address_line_2", "Not filled")
            city = data.get("city")
            state = data.get("state")
            pincode = data.get("pincode")
            payment_method = data.get("payment_method", "Cash On Delivery")
            transac_id = data.get("transaction_id", "Cash On Delivery")
            products = data.get("products")  # List of product IDs and quantities

            user = User.objects.filter(id=user_id).first()
            if not user:
                return JsonResponse({'message': 'User not found'}, status=404)

            if not products:
                return JsonResponse({'message': 'No products provided in the order'}, status=400)

            total_amount = 0
            for product_data in products:
                product_id = product_data.get("id")
                qty = product_data.get("Qty")

                if not product_id or qty is None:
                    return JsonResponse({'message': 'Invalid product data'}, status=400)

                product_instance = product.objects.filter(id=product_id).first()
                if not product_instance:
                    return JsonResponse({'message': f"Product with ID {product_id} not found"}, status=404)

                total_amount += product_instance.price * qty

            order = orders.objects.create(
                user_id=user,
                email=user.email,
                Phone_number=user.phone_number,
                address_line_1=address_line_1,
                address_line_2=address_line_2,
                city=city,
                state=state,
                pincode=pincode,
                payment_method=payment_method,
                transaction_id=transac_id,
                payment_amount=total_amount  
            )

            for product_data in products:
                product_id = product_data.get("id")
                qty = product_data.get("Qty")

                product_instance = product.objects.filter(id=product_id).first()
                order_item_instance = order_item.objects.create(
                    order=order,
                    product=product_instance,
                    quantity=qty
                )

            return JsonResponse({'message': 'Order placed successfully', 'order_id': order.id}, status=201)

        except Exception as e:
            return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)

    else:
        return JsonResponse({'message': 'GET method not allowed'}, status=405)

@validate_session_key
@validate_api_key
@csrf_exempt
def order_details(request, uid):
    if request.method == "GET":
        try:
            user_id = uid
            if not user_id:
                return JsonResponse({'message': 'User ID is required'}, status=400)

            user = User.objects.filter(id=user_id).first()
            if not user:
                return JsonResponse({'message': 'User not found'}, status=404)

            user_orders = orders.objects.filter(user_id=user)

            orders_data = []
            for order in user_orders:
                order_details = {
                    'order_id': order.id,
                    'status': order.status,
                    'address_line_1': order.address_line_1,
                    'address_line_2': order.address_line_2,
                    'city': order.city,
                    'state': order.state,
                    'pincode': order.pincode,
                    'payment_amount': order.payment_amount,
                    'payment_method': order.payment_method,
                    'transaction_id': order.transaction_id,
                    'created_at': order.created_at,
                    'updated_at': order.updated_at
                }

                order_items = order.order_items.all()  # Use 'order_items' here
                items_data = []
                for item in order_items:
                    items_data.append({
                        'product_name': item.product.name,
                        'quantity': item.quantity,
                        'price': item.product.price,
                        'total_price': item.product.price * item.quantity
                    })

                order_details['items'] = items_data
                orders_data.append(order_details)

            return JsonResponse({'orders': orders_data}, status=200)

        except Exception as e:
            return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)
    else:
        return JsonResponse({'message': 'GET method not allowed'}, status=405)
