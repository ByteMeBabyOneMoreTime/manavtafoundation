from django.shortcuts import render

from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import post
from api.views import validate_api_key
from django.views.decorators.csrf import csrf_exempt


import logging
logger = logging.getLogger(__name__)


@validate_api_key
@csrf_exempt
def UploadPost(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            title = data.get('title')
            desc = data.get('desc')
            url_image = data.get('image')
            if post.objects.filter(title=title).exists():
                return JsonResponse({'message': 'A Post With the same title already exists'}, status=400)
            else:
                p = post(title=title, description=desc, media_url=url_image)
                p.save()
                return JsonResponse({'message': 'Post added successfully'}, status=201)

        except json.JSONDecodeError as e:
            logger.error(f"JSON Decode Error: {e}")
            return JsonResponse({'message': 'Invalid JSON payload'}, status=400)

        except Exception as e:
            return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)
    
    else:
        return JsonResponse({'message': 'GET method not allowed'}, status=405)
    
@csrf_exempt
def get_post(request):
    if request.method == "POST":
        return JsonResponse({'message': 'POST method not allowed'}, status=405)
    else:
        news = list(post.objects.values())  # Convert QuerySet to list of dictionaries
        return JsonResponse({'data': news}, safe=False)

@validate_api_key
@csrf_exempt
def DeletePost(request):
    if request.method == "POST":
        data = json.loads(request.body)
        title = data.get('title')
        if post.objects.filter(title=title).exists():
            post.objects.filter(title=title).first().delete()
            return JsonResponse({'message': 'Post deleted successfully'}, status=201)
        else:
            return JsonResponse({'message': 'Post Does not exists'}, status=400)
    else:
        return JsonResponse({'message': 'POST method not allowed'}, status=405)