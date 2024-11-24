from django.urls import path
from . import views

urlpatterns = [
    path('upload', views.UploadNews, name="upload"),
    path('delete', views.DeleteNews, name="delete"),
    path('download', views.get_news, name='downlaod')
]
