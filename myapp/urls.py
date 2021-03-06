from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("check", views.check, name="check"),
    path("trending/", views.trending_pull, name="trending"),
    path("movie/<int:movie_id>", views.movie_pull, name="movie_search")
]

