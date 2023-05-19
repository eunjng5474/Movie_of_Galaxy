from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.shortcuts import get_object_or_404, get_list_or_404
from django.shortcuts import render
from rest_framework import status
from .serializers import MovieListSerializer, MovieSerializer
from .models import Movie

# Create your views here.
@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        # all_movies = get_list_or_404(Movie)
        all_movies = Movie.objects.all()
        top30_popularity = all_movies[:30]
        top30_vote_average = all_movies.order_by('-vote_average')[:30]
        random30 = all_movies.order_by('?')[:30]

        
        # context = {
        #     'all_movies': all_movies,
        #     'top30_popularity' : top30_popularity,
        #     'top30_vote_average' : top30_vote_average,
        #     'random30' : random30
        # }
        all_movies_serializer = MovieListSerializer(all_movies, many=True)
        top30_popularity_serializer = MovieListSerializer(top30_popularity, many=True)
        top30_vote_average_serializer = MovieListSerializer(top30_vote_average, many=True)
        random30_serializer = MovieListSerializer(random30, many=True)

        serialized_data = {
            'all_movies': all_movies_serializer.data,
            'top30_popularity': top30_popularity_serializer.data,
            'top30_vote_average': top30_vote_average_serializer.data,
            'random30': random30_serializer.data
        }

        # serializer = MovieListSerializer(context, many=True)
        return Response(serialized_data, status=status.HTTP_200_OK)
    

@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)