from django.contrib import admin
from .models import product, catergory, orders
# Register your models here.

admin.site.register(product)
admin.site.register(catergory)
admin.site.register(orders)