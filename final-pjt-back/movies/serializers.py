from rest_framework import serializers
from .models import Movie
from accounts.serializers import *
from django.contrib.auth import get_user_model

User = get_user_model()

class MovieListSerializer(serializers.ModelSerializer):
    # like_users = ProfileSerializer(many=True)
    class Meta:
        model = Movie
        fields = '__all__'
        # 필드 추후 수정


class MovieSerializer(serializers.ModelSerializer):
    # like_users = CustomRegisterSerializer(many=True)
    
    class Meta:
        model = Movie
        fields = '__all__'


class MovieLikeSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('id', 'username',)
    like_users = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = ('id', 'like_users')