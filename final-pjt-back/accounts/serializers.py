from rest_framework import serializers
from django.contrib.auth import get_user_model
# from movies.models import Movie
from allauth.account.adapter import get_adapter, DefaultAccountAdapter
from django.core.exceptions import ValidationError as DjangoValidationError
from dj_rest_auth.registration.serializers import RegisterSerializer
# User = get_user_model()
from .models import User


class CustomRegisterSerializer(RegisterSerializer):
# class CustomRegisterSerializer(serializers.ModelSerializer):
    nickname = serializers.CharField(max_length=30)
    birth = serializers.DateField()

    # class Meta:
    #     model = User
    #     fileds = ('nickname', 'birth')
        # fileds = '__all__'
    # print('2222222222'*20)
    def get_cleaned_data(self):
        # print('33333333333'*20)

        data = super().get_cleaned_data()
        data['nickname'] = self.validated_data.get('nickname', '')
        data['birth'] = self.validated_data.get('birth', '')
        # print('55555555555555555'*20)
        return data

    


# class CustomRegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'
    
#     def get_cleaned_data(self):
#         return {
#             'nickname': self.validated_data.get('nickname', ''),
#             'birth': self.validated_data.get('birth', ''),
#         }

#     def save(self, request):
#         adapter = get_adapter()
#         user = adapter.new_user(request)
#         self.cleaned_data = self.get_cleaned_data()
#         user = adapter.save_user(request, user, self, commit=False)
#         if "password" in self.cleaned_data:
#             try:
#                 adapter.clean_password(self.cleaned_data['password'], user=user)
#             except DjangoValidationError as exc:
#                 raise serializers.ValidationError(
#                     detail=serializers.as_serializer_error(exc)
#                 )
#         user.save()
#         return user
        


class ProfileSerializer(serializers.ModelSerializer):
    nickname = serializers.CharField()
    # class MovieSerializer(serializers.ModelSerializer):
    #     class Meta:
    #         model = Movie
    #         fields = '__all__'
    # movie = MovieSerializer(read_only=True)

    class Meta:
        model = User
        fields = '__all__'

### 커스텀 시도
# class UserSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(max_length=100, write_only= True)
#     nickname = serializers.CharField(max_length=100)
#     birth = serializers.DateField()

#     class Meta:
#         model = User
#         fields = ('username', 'password', 'nickname', 'birth')