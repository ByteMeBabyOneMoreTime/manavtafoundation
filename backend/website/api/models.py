from django.db import models
import uuid

class key(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    def __str__(self):
        return f"{self.id}"    
