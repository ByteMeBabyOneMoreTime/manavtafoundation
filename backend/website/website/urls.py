from django.contrib import admin
from django.urls import path, include
from .load_testing import load, home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('user.urls')),
    path('news/', include('news.urls')),
    path('blogs/', include('blog.urls')),
    path('products/', include('shop.urls')),
    path('cron', include('cron.urls')),
    path('loaderio-b6e19c15e99987cb51bd30fd91da0bd0.txt', load, name='load testing'),
    path('', home, name='home')
]
# this is comment