from django.shortcuts import render
from django.http.response import HttpResponseRedirect, JsonResponse
from django.http import HttpResponse
from dotenv import load_dotenv
from .models import MovieModel

import os
import requests
import json

load_dotenv()

API_KEY = os.getenv("API_KEY")

def index(request):
    return render(request, "myapp/index.html")

# Create your views here.
def check(request):
    return render(request, "myapp/check.html")

#Pulling Movie Data from title
def movie_pull(request, movie_id):
    response = requests.get(f'https://api.themoviedb.org/3/movie/{movie_id}?api_key={API_KEY}&language=en-US')
    ratings = rating_pull(response.json())
    return JsonResponse(response.json())

#Check internal models for movie ratings
def rating_pull(movie_data):
    movie_id = movie_data.id
    try:
        movie_query = MovieModel.objects.filter(movie_id = movie_id)
        rating_data = {
            "sex_rating": movie_query.sex_rating,
            "gore_rating": movie_query.gore_rating,
            "language_rating": movie_query.language_rating,
            "religion_rating": movie_query.religion_rating,
            "quality_rating": movie_query.quality_rating
        }
    #if no model, create new model
    except: 
        print("Could Not Find Movie, Creating Entry")
        new_entry = MovieModel.objects.create(title = movie_data.original_title)
        new_entry.movie_id = movie_data.id
        new_entry.save()

    return rating_data

#Pulls Trending JSON
def trending_pull(request):
    try:
        trend_data = requests.get(f'https://api.themoviedb.org/3/trending/movie/week?api_key={API_KEY}')
    except:
        print("Error: Can't pull from API")
    return JsonResponse(trend_data.json())