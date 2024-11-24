from django.urls import path
from . import views

urlpatterns = [
    path('download', views.get_products, name="download")
]
