from django.shortcuts import render
from django.http.response import HttpResponseRedirect, JsonResponse
from django.http import HttpResponse
from dotenv import load_dotenv

import os
import requests
import json

load_dotenv()

API_KEY = os.getenv("API_KEY")

# Create your views here.
def index(request):
    return render(request, "myapp/index.html")

#Pulling Movie Data from title
def movie_pull(pk):
    movie_data = requests.get(f'https://api.themoviedb.org/3/movie/{pk}?api_key={API_KEY}')
    return JsonResponse(movie_data.json())

def trending_pull(request):
    try:
        trend_data = requests.get(f'https://api.themoviedb.org/3/trending/movie/week?api_key={API_KEY}')
    except:
        print("Error: Can't pull from API")
    return JsonResponse(trend_data.json())

