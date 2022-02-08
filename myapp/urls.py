from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("check", views.check, name="check"),
    path("test/", views.trending_pull, name="test")
]
