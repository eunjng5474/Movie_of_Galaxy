from django.urls import path
from . import views

urlpatterns = [
    path('profile/<int:user_pk>/', views.profile),
    # 커스텀 시도
    # path('signup/', views.signup),
]
