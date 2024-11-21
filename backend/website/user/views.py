from django.shortcuts import render, redirect
import json
from django.http import JsonResponse
from .models import User
from .models import session_key
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


@csrf_exempt
def login(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")

            user_cache = User.objects.filter(email=email).first()
            if user_cache:
                if user_cache.password == password:
                    session = session_key.objects.filter(user=user_cache).first()
                    if session:
                        return JsonResponse({'message': f'{session.id}'}, status=200)
                    else:
                        get_session = session_key(user=user_cache)
                        get_session.save()
                        return JsonResponse({'message': f'{get_session.id}'}, status=200)
                else:
                    return JsonResponse({'message': 'Incorrect Password'}, status=400)
            else:
                return JsonResponse({'message': 'Email does not exist'}, status=404)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON payload'}, status=400)

        except Exception as e:
            return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)
    else:
        return JsonResponse({'message': 'GET method not allowed'}, status=405)