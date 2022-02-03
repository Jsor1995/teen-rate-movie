from django.db import models

# Create your models here.
class MovieModel(models.Model):
    title = models.CharField(max_length=200)
    release_date = models.IntegerField()
    movie_rating = models.CharField(max_length=3)
    poster_image= models.ImageField(null=True)
    