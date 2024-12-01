from django.urls import path
from . import views

urlpatterns = [
    path('download', views.get_products, name="download"),
    path('download/<pid>', views.get_product_by_id, name="download by id"),
    path('categories', views.get_categories, name="categories"),
    path('filter/<id>', views.get_categories_products, name="filter"),
    path('order', views.manage_order, name="place order"),
    path('order_details/<uid>', views.order_details, name="order details of the user")
]
