from django.db import models

class User(models.Model):
    user_id = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.user_id
