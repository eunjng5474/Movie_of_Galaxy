"""final_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('movies.urls')),
    path('api/v2/', include('community.urls')),
    path('account/', include('dj_rest_auth.urls')),
    path('account/signup/', include('dj_rest_auth.registration.urls')),
    # 이거 바꿔도 되는 거 맞나,,,,,, 일단 되긴 한데,,,,,
    path('accounts/', include('accounts.urls')),
    #제발 되라되라제발
    path('accounts/', include('allauth.urls')),
    # 커스텀 시도 -> rest auth 쓸거면 위에 두 개 주석 해제
]
