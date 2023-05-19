from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.shortcuts import get_object_or_404, get_list_or_404
from django.shortcuts import render
from rest_framework import status
from .serializers import ProfileSerializer, UserSerializer
from .models import User
# from django.contrib.auth import get_user_model

# User = get_user_model()

# Create your views here.

# 프로필 조회
@api_view(['GET'])
def profile(request, user_pk):
    if request.method == 'GET':
        person = get_object_or_404(User, pk=user_pk)
        serializer = ProfileSerializer(person)
        return Response(serializer.data)


######## signup form custom 시도
@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data = request.data)
    print(request.data)
    print('111111111'*10)
    # if serializer.is_valid():
    serializer.is_valid(raise_exception=True)
    serializer.save()
    print(serializer.data)
    return Response(serializer.data)