from django.shortcuts import render, redirect
import json
from django.http import JsonResponse
from .models import User
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def register(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get("name")
            email = data.get("email")
            password = data.get("password")
            phone_number = data.get("phone_number")
            print(name, email, password, phone_number)

            if User.objects.filter(email=email).exists():
                return JsonResponse({'message': 'Email already exists'}, status=400)

            user_cache = User(name=name, email=email, password=password, phone_number=phone_number)
            user_cache.save()
            return JsonResponse({'message': 'User created successfully'}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON payload'}, status=400)

        except Exception as e:
            return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)

    else:
        return JsonResponse({'message': 'GET method not allowed'}, status=405)

