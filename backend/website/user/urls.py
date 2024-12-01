from django.urls import path
from .views import register, login, logout, get_user_details

urlpatterns = [
    path('register', register, name='register'),
    path('login', login, name="login"),
    path('logout', logout, name='logout'),
    path('user', get_user_details, name="user details")
]
