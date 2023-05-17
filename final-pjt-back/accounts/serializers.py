from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie

User = get_user_model()
# from .models import User

class ProfileSerializer(serializers.ModelSerializer):
    # class MovieSerializer(serializers.ModelSerializer):
    #     class Meta:
    #         model = Movie
    #         fields = '__all__'
    # movie = MovieSerializer(read_only=True)

    class Meta:
        model = User
        fields = '__all__'
