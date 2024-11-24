from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import product

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
