from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.shortcuts import get_object_or_404, get_list_or_404
from django.shortcuts import render
from rest_framework import status
from .serializers import *
from .models import User
from rest_framework.decorators import api_view, permission_classes
#임시
# from .forms import CustomSignupForm
from dj_rest_auth.registration.views import RegisterView
from rest_framework.permissions import *



######## signup form custom 시도
@api_view(['POST'])
def signup(request):
    serializer = CustomRegisterSerializer(data = request.data)
    # if serializer.is_valid():
    if serializer.is_valid(raise_exception=True):
        serializer.save(request)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

# 프로필 조회
@api_view(['GET'])
def user_movie_list(request, username):
    # person = User.objects.get(username=username)
    person = get_object_or_404(User, username=username)
    # print(current_user)
    # print('-------------'*10)
    serializer = ProfileSerializer(person)
    # print('99999999'*10)
    # print(serializer.data)
    return Response(serializer.data)