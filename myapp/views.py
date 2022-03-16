from django.shortcuts import render
from django.http.response import HttpResponseRedirect, JsonResponse
from django.http import HttpResponse
from django.db.models import Avg
from dotenv import load_dotenv
from .models import MovieModel

import os
import requests
import json

load_dotenv()

API_KEY = os.getenv("API_KEY")

def index(request):
    context = { }
    print(request)
    return render(request, "index.html", context)

# Create your views here.
def check(request):
    return render(request, "myapp/check.html")

#Pulling Movie Data from title
def movie_pull(request, movie_id):
    try : 
        response = requests.get(f'https://api.themoviedb.org/3/movie/{movie_id}?api_key={API_KEY}&language=en-US')
        movie_data = response.json()
            
        print(movie_data["status_code"])
        if movie_data["status_code"] == 7:
            f = open('test.json', 'r')

            movie_data = json.loads(f.read())
    except:
        movie_data = {'success':'false'}

    # ratings = rating_pull(movie_data)
    # movie_data.update(ratings)
    return JsonResponse(movie_data)

#Check internal models for movie ratings
def rating_pull(movie_data):
    movie_id = movie_data.id
    try:
        movie_query = MovieModel.objects.filter(movie_id = movie_id)
        rating_data = {
            "sex_rating": movie_query.aggregate(Avg('sex_rating')),
            "gore_rating": movie_query.aggregate(Avg('gore_rating')),
            "language_rating": movie_query.aggregate(Avg('language_rating')),
            "religion_rating": movie_query.aggregate(Avg('religion_rating')),
            "quality_rating": movie_query.aggregate(Avg('quality_rating'))
        }
        print(rating_data)
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