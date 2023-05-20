from rest_framework import serializers
from . models import Article, Comment
from django.contrib.auth import get_user_model

User = get_user_model()

# 전체 게시글 목록 조회 ,
class ArticleListSerializer(serializers.ModelSerializer):
    
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('id', 'username','nickname') # 되면 닉네임 추가해보기

    write_article_user = UserSerializer(read_only=True)

    class Meta:
        model = Article
        # fields = ('id', 'title', 'content')
        fields = ('id', 'title', 'content', 'write_article_user',)


# 댓글 생성
class CommentSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username','nickname') #나중 닉네임 추가해보자, 이건 왜 pk이지? 나중 확인해보자
        
    write_comment_user = UserSerializer(read_only=True)
    
    class Meta:
        model = Comment
        fields = '__all__' #여기선 all 로 한번볼까
        read_only_fields = ('article',)


# 게시글 하나 조회수정삭제
class ArticleSerializer(serializers.ModelSerializer):
    # username = serializers.CharField(source='user.username', read_only=True)

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('id', 'username',)
    
    write_article_user = UserSerializer(read_only=True)
    comment_set = CommentSerializer(many=True, read_only=True)
    comment_count = serializers.IntegerField(source='comment_set.count', read_only=True)

    class Meta:
        model = Article
        fields = '__all__'
        # read_only_fields = ('user', )