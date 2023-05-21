from rest_framework.response import Response
from rest_framework.decorators import api_view
# Authentication Decorators
# from rest_framework.decorators import authentication_classes

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import ArticleListSerializer, ArticleSerializer, CommentSerializer
from .models import Article, Comment


@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def article_list(request):
    print('-'*30)
    if request.method == 'GET':
        articles = get_list_or_404(Article)
        serializer = ArticleListSerializer(articles, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            print(request.user)
            print(request)
            serializer.save(write_article_user = request.user) # write_articleuser = request.user추가
            return Response(serializer.data, status=status.HTTP_201_CREATED)
# @api_view(['POST'])
# def article_create(request):
#     if request.method == 'POST':
#         serializer = ArticleSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)

        
@api_view(['GET', 'DELETE', 'PUT'])
def article_detail(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)

    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        # print(serializer.data)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        article.delete() # 데이터 삭제 알림 나중에 추가해보자, 자신만 지울수잇게
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':  # 나중작성자만 수정할쑤있게 if reqeust,user = article.user뭥이런거 한줄 추가 예정
        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['GET'])   # 댓글은 들고올 필요가 없네 나중에 봐서 삭제 
def comment_list(request):
    if request.method == 'GET':
        comments = get_list_or_404(Comment)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

@api_view(['GET', 'DELETE', 'PUT']) #댓글 갯 요청도 필요없구나
def comment_detail(request, comment_pk):
    comment = get_object_or_404(Comment, pk=comment_pk)

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    
    elif request.method == 'DELETE': #댓글 쓴 사람만 딜릿되게 아니면 ㅁ뷰에서 칸보여주던가
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT': #댓글을 쓴자시남ㄴ 수정
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        

@api_view(['POST'])
def comment_create(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(article=article, write_comment_user = request.user) #유저정보가 잇어야함ㄴㄴ
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# @api_view(['POST'])
# def article_likes(request, article_pk):
#     article = get_object_or_404(Article, pk=article_pk)
