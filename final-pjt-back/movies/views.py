from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from django.shortcuts import get_object_or_404, get_list_or_404
from django.shortcuts import render
from rest_framework import status
from rest_framework.permissions import *
from .serializers import *
from .models import Movie

# Create your views here.
@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        # all_movies = get_list_or_404(Movie)
        all_movies = Movie.objects.all()
        # 수정 과정에서 30이 아닌 100개로 바꿈 
        # -> 메인에서 100개만 보여주려고(추천은 인기순 안 할 거임)
        top30_popularity = all_movies[:100]
        top30_vote_average = all_movies.order_by('-vote_average')[:30]
        random30 = all_movies.order_by('?')[:30]

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
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def movie_like(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = request.user
    if movie.like_users.filter(pk=user.pk).exists():
        movie.like_users.remove(user)
    else:
        movie.like_users.add(user)
    serializer = MovieLikeSerializer(movie)
    return Response(serializer.data)