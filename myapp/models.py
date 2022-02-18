from django.db import models

class MovieModel(models.Model):
    title = models.CharField(max_length=200)
    movie_id = models.CharField(max_length=20)
    sex_rating = models.IntegerField()
    gore_rating = models.IntegerField()
    language_rating = models.IntegerField()
    religion_rating = models.IntegerField()
    quality_rating = models.IntegerField()

    