from django.shortcuts import render

from functools import wraps
from django.http import JsonResponse
from .models import key

def validate_api_key(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        # Extract API key from request (e.g., from headers, GET, or POST data)
        api_key = request.headers.get('key')  # Or request.GET.get('api_key') or request.POST.get('api_key')

        if not api_key:
            return JsonResponse({'error': 'API Key missing'}, status=400)

        # Check if the API key exists in the database
        if not key.objects.filter(id=api_key).exists():
            return JsonResponse({'error': 'Invalid API Key'}, status=401)

        # API key is valid, proceed with the view
        return view_func(request, *args, **kwargs)

    return wrapper