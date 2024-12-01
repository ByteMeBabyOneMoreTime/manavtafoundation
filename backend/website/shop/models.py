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
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    email = models.EmailField(max_length=300)
    Phone_number = models.CharField(max_length=300)

    address_line_1 = models.TextField(max_length=10000)
    address_line_2 = models.TextField(max_length=10000, blank=True, default="Not filled")
    city = models.CharField(max_length=300)
    state = models.CharField(max_length=300)
    pincode = models.CharField(max_length=100)

    STATUS = (
        ('Unverified', 'Unverified'),
        ('Placed', 'Placed'),
        ('Completed', 'Completed')
    )
    status = models.CharField(max_length=200, choices=STATUS, default='Placed')
    
    # Managing Payaments
    payment_amount = models.IntegerField()
    METHOD = (
        ('Cash On Delivery', 'Cash On Delivery'),
        ('Online Via Qr', 'Online Via Qr')
    )
    payment_method = models.CharField(max_length=300, choices=METHOD, default="Cash On Delivery")
    transaction_id = models.CharField(max_length=200, default="Cash On Delivery", blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.user_id.name}"
    
class order_item(models.Model):
    order = models.ForeignKey(orders, on_delete=models.CASCADE, related_name="order_items")
    product = models.ForeignKey(product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.product.name} (x{self.quantity})"
