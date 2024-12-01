from django.shortcuts import render, redirect
import json
from django.http import JsonResponse
from .models import User
from .models import session_key
from django.views.decorators.csrf import csrf_exempt
from api.views import validate_api_key


@validate_api_key
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


@validate_api_key
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
                        return JsonResponse({'message': f'{session.id}', "uid" : f"{user_cache.id}"}, status=200)
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
    
@validate_api_key
@csrf_exempt
def logout(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            session_id = data.get("session_id")
            
            session = session_key.objects.filter(id=session_id).first()
            if session:
                session.delete()
                return JsonResponse({'message': 'Deleted Session'}, status=400)
            else:
                return JsonResponse({'message': 'Session does not exist'}, status=404)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON payload'}, status=400)

        except Exception as e:
            return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)
    else:
        return JsonResponse({'message': 'GET method not allowed'}, status=405)
    

import json
from functools import wraps
from django.http import JsonResponse
from .models import session_key

def validate_session_key(func):
    """
    Wrapper function to validate the session key from the raw JSON body.
    """
    @wraps(func)
    def wrapper(request, *args, **kwargs):
        try:
            # Parse the raw body as JSON
            body_data = json.loads(request.body)
            session_id = body_data.get('session_key')
        except (json.JSONDecodeError, AttributeError):
            return JsonResponse({'error': 'Invalid or missing JSON body'}, status=400)
        
        if not session_id:
            return JsonResponse({'error': 'Session key is missing'}, status=400)
        
        try:
            # Validate session key
            session = session_key.objects.get(id=session_id)
        except session_key.DoesNotExist:
            return JsonResponse({'error': 'Invalid session key'}, status=403)
        
        # Pass user information to the wrapped function
        request.user = session.user
        return func(request, *args, **kwargs)
    
    return wrapper


@validate_api_key
@validate_session_key
@csrf_exempt
def get_user_details(request):
    if request.method == "GET":
        try:
            user = request.user  # The user is attached to the request in the validate_session_key decorator

            user_details = {
                'id': str(user.id),
                'name': user.name,
                'email': user.email,
                'phone_number': user.phone_number,
                'created_at': user.created_at,
                'updated_at': user.updated_at,
            }

            return JsonResponse(user_details, status=200)

        except Exception as e:
            return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)
    
    else:
        return JsonResponse({'message': 'GET method not allowed'}, status=405)