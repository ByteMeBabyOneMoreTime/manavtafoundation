from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('user.urls')),
    path('news/', include('news.urls')),
    path('blogs/', include('blog.urls')),
    path('products/', include('shop.urls')),
    path('cron', include('cron.urls'))

]
