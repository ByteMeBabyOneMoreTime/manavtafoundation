from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import New
from api.views import validate_api_key
from django.views.decorators.csrf import csrf_exempt


import logging
logger = logging.getLogger(__name__)


@validate_api_key
@csrf_exempt
def UploadNews(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            title = data.get('title')
            desc = data.get('desc')
            url_image = data.get('image')
            if New.objects.filter(title=title).exists():
                return JsonResponse({'message': 'A News With the same title already exists'}, status=400)
            else:
                news = New(title=title, description=desc, media_url=url_image)
                news.save()
                return JsonResponse({'message': 'News added successfully'}, status=201)

        except json.JSONDecodeError as e:
            logger.error(f"JSON Decode Error: {e}")
            return JsonResponse({'message': 'Invalid JSON payload'}, status=400)

        except Exception as e:
            return JsonResponse({'message': f'An error occurred: {str(e)}'}, status=500)
    
    else:
        return JsonResponse({'message': 'GET method not allowed'}, status=405)
    
@csrf_exempt
def get_news(request):
    if request.method == "POST":
        return JsonResponse({'message': 'POST method not allowed'}, status=405)
    else:
        news = list(New.objects.values())  # Convert QuerySet to list of dictionaries
        return JsonResponse({'data': news}, safe=False)

@validate_api_key
@csrf_exempt
def DeleteNews(request):
    if request.method == "POST":
        data = json.loads(request.body)
        title = data.get('title')
        if New.objects.filter(title=title).exists():
            New.objects.filter(title=title).first().delete()
            return JsonResponse({'message': 'News deleted successfully'}, status=201)
        else:
            return JsonResponse({'message': 'News Does not exists'}, status=400)
    else:
        return JsonResponse({'message': 'POST method not allowed'}, status=405)