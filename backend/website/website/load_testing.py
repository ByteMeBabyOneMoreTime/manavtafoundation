from django.shortcuts import HttpResponse

def load(request):
    return HttpResponse('loaderio-b6e19c15e99987cb51bd30fd91da0bd0', content_type="text/plain")

def home(request):
    return HttpResponse('Backend server is responding')