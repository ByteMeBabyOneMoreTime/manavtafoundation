from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.views import validate_api_key
from .models import product
from .models import catergory
from .models import orders
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


# @validate_session_key
# @validate_api_key
# @csrf_exempt
# def create_order(request):
#     if request.method == "POST":
#         try:
#             data = json.loads(request.body)
            
            
#             user_id = data.get("user_id")
#             email = data.get("email")
#             phone_number = data.get("phone_number")
#             address_line_1 = data.get("address_line_1")
#             address_line_2 = data.get("address_line_2", "Not filled")
#             city = data.get("city")
#             state = data.get("state")
#             pincode = data.get("pincode")
#             items = data.get("items")  # List of product IDs
#             payment_amount = data.get("payment_amount")
#             payment_method = data.get("payment_method", "Cash On Delivery")
#             transaction_id = data.get("transaction_id", "Cash On Delivery")

            
#             if not (user_id and email and phone_number and address_line_1 and city and state and pincode and items and payment_amount):
#                 return JsonResponse({'message': 'Missing required fields'}, status=400)

            
#             user = User.objects.filter(id=user_id).first()
#             if not user:
#                 return JsonResponse({'message': 'User not found'}, status=404)

            
#             products = product.objects.filter(id__in=items)
#             if not products.exists():
#                 return JsonResponse({'message': 'Invalid products in items'}, status=400)

            
#             order = orders.objects.create(
#                 user_id=user,
#                 email=email,
#                 Phone_number=phone_number,
#                 address_line_1=address_line_1,
#                 address_line_2=address_line_2,
#                 city=city,
#                 state=state,
#                 pincode=pincode,
#                 payment_amount=payment_amount,
#                 payment_method=payment_method,
#                 transaction_id=transaction_id
#             )
#             order.items.set(products)  

#             return JsonResponse({'message': 'Order created successfully', 'order_id': order.id}, status=201)

#         except json.JSONDecodeError:
#             return JsonResponse({'message': 'Invalid JSON payload'}, status=400)

#         except Exception as e:
#             return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)

#     else:
#         return JsonResponse({'message': 'GET method not allowed'}, status=405)
