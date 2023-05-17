from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.shortcuts import get_object_or_404, get_list_or_404
from django.shortcuts import render
from rest_framework import status
from .serializers import MovieListSerializer
from .models import Movie

# Create your views here.
@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        movies = get_list_or_404(Movie)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)