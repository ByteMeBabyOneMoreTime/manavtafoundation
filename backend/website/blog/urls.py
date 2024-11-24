from django.urls import path
from . import views

urlpatterns = [
    path('upload', views.UploadPost, name="upload"),
    path('delete', views.DeletePost, name="delete"),
    path('download', views.get_post, name='downlaod')
]
