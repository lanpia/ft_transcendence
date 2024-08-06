from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/', default='avatars/default.jpg')
    friends = models.ManyToManyField('self', blank=True)
    wins = models.IntegerField(default=0)  # 승리 횟수 필드 추가

    def __str__(self):
        return self.username
