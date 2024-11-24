from django.db import models

class post(models.Model):
    title = models.TextField(max_length=3000, unique=True)
    description = models.TextField(max_length=30000)
    media_url = models.URLField()

    def __str__(self):
        return f"{self.title}"