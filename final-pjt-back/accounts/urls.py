from django.urls import path
from . import views

urlpatterns = [
    path('profile/<username>/', views.user_movie_list),
]
