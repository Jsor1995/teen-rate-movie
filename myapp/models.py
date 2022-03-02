from django.db import models
from django.forms import ModelForm

class MovieModel(models.Model):
    title = models.CharField(max_length=200)
    movie_id = models.CharField(max_length=20)
    sex_rating = models.IntegerField(blank=True, null=True)
    gore_rating = models.IntegerField(blank=True, null=True)
    language_rating = models.IntegerField(blank=True, null=True)
    religion_rating = models.IntegerField(blank=True, null=True)
    quality_rating = models.IntegerField(blank=True, null=True)

class MovieModelForm(ModelForm):
    class Meta: 
        model = MovieModel
        fields = ['movie_id','sex_rating', 'gore_rating', 'language_rating', 'religion_rating', 'quality_rating']