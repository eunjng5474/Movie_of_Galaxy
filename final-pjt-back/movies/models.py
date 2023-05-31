from django.db import models
from django.conf import settings

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField()
    release_date = models.DateField()
    poster_path = models.CharField(max_length=200)
    vote_average = models.FloatField()
    popularity = models.FloatField()
    key = models.TextField()
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="like_movies")


