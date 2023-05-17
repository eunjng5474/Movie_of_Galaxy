from rest_framework import serializers
from .models import Movie
from accounts.serializers import ProfileSerializer

class MovieListSerializer(serializers.ModelSerializer):
    # like_users = ProfileSerializer(many=True)
    class Meta:
        model = Movie
        fields = '__all__'
        # 필드 추후 수정


class MovieSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = '__all__'