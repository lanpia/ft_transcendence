# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/', default='avatars/default.jpg')
    friends = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.username
