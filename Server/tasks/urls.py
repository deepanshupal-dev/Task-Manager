from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import TaskViewset,RegisterView
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView)

router = DefaultRouter()

router.register('tasks',TaskViewset,basename='task')

urlpatterns = [
    
    path('register/',RegisterView.as_view()),
    path('login/',TokenObtainPairView.as_view()),
    path('token/refresh/',TokenRefreshView.as_view()),
]+router.urls


