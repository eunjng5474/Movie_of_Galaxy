from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie
from allauth.account.adapter import get_adapter, DefaultAccountAdapter
from django.core.exceptions import ValidationError as DjangoValidationError
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import User


class CustomRegisterSerializer(RegisterSerializer):
    nickname = serializers.CharField(max_length=30)
    birth = serializers.DateField()


    class Meta:
        model = User
        fields = ('nickname', 'birth',)
        
    def get_cleaned_data(self):

        data = super().get_cleaned_data()
        data['nickname'] = self.validated_data.get('nickname', '')
        data['birth'] = self.validated_data.get('birth', '')
        return data        


class ProfileSerializer(serializers.ModelSerializer):
    nickname = serializers.CharField()
    class MovieSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = '__all__'
    like_movies = MovieSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'
