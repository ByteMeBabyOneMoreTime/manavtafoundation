from django.db import models
from user.models import User

class catergory(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name

class product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=30000)
    image = models.URLField()
    price = models.IntegerField()
    quantity = models.IntegerField()
    catergory = models.ManyToManyField(catergory, related_name="products")
    
    def __str__(self) -> str:
        return self.name

# class orders(models.Model):
#     address = models.TextField(max_length=10000)
#     user_id = models.ForeignKey(User)
#     items = 
#     status =
#     payment_amount =

#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)