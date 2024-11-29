from django.db import models
from user.models import User

class catergory(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name

class product(models.Model):
    name = models.CharField(max_length=200)
    botanical_name = models.CharField(max_length=200, default='None')
    description = models.TextField(max_length=30000)
    image = models.URLField()
    price = models.IntegerField()
    quantity = models.IntegerField()
    PS = (
        ('S', 'S'),
        ('M', 'M'),
        ('L', 'L')
    )
    plant_size = models.CharField(max_length=200, choices=PS, default='S')
    catergory = models.ManyToManyField(catergory, related_name="products")
    
    def __str__(self) -> str:
        return self.name

class orders(models.Model):
    address = models.TextField(max_length=10000)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='User')
    items = models.ManyToManyField(product, related_name="product")
    STATUS = (
        ('Placed', 'Placed'),
        ('Completed', 'Completed')
    )
    status = models.CharField(max_length=200, choices=STATUS, default='Placed')
    payment_amount = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.user_id.name}"