from django.urls import path
from . import views

urlpatterns = [
    path('download', views.get_products, name="download"),
    path('categories', views.get_categories, name="categories"),
    path('filter/<id>', views.get_categories_products, name="filter")
]
