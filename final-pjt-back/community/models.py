from django.db import models
from django.conf import settings

# Create your models here.

class Article(models.Model):
    # 댓글 쓴유저랑 구분위해서 이렇게 이름 바꿧고 , related_name은 추후 프로필에서 내가 쓴 글 모을수 있기 때문에 일단 설정
    write_article_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='write_article') 
    # like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_articles') #likeuser 하려면 시리얼라이즈도 likelist따로만들어야함 일단 대기
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    # 댓글작성자 유저도 알아야하니까 설정
    write_comment_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='write_comment')

    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)