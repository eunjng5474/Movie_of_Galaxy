from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    nickname = models.CharField(max_length=100)
    # points = models.IntegerField(null=True)
    birth = models.DateField(null=True, blank=True)
    # profile = models.CharField(max_length=200, null=True, blank=True)