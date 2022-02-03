from django.shortcuts import render
from django.http.response import HttpResponseRedirect, JsonResponse
from django.http import HttpResponse

import requests
import json

# Create your views here.
def index(request):
    return render(request, "myapp/index.html")

#Pulling Movie Data from title
def movie_pull(request, pk):
    movie_data = request.get(f'https://api.themoviedb.org/3/movie/${pk}?api_key=#')
    return