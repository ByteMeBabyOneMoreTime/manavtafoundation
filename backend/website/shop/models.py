from django.db import models

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
