from django.shortcuts import render
from django.http.response import HttpResponseRedirect, JsonResponse
from django.http import HttpResponse
from dotenv import load_dotenv

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
def movie_pull(string, adultbool):

    movie_data = requests.get(f'https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&language=en-US&page=1&include_adult={adultbool}')
    return JsonResponse(movie_data.json())

#Pulls Trending JSON
def trending_pull(request):
    try:
        trend_data = requests.get(f'https://api.themoviedb.org/3/trending/movie/week?api_key={API_KEY}')
    except:
        print("Error: Can't pull from API")
    return JsonResponse(trend_data.json())

