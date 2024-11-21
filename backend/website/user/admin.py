from django.contrib import admin
from .models import User, session_key
# Register your models here.
admin.site.register(User)
admin.site.register(session_key)
