from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id','title','description','completed','created_at']
        read_only_fields = ['user']
        
        
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    class Meta:
        model = User
        fields = ['username','email','password']
        
    def create(self,validate_data):
        user = User.objects.create_user(
            username=validate_data['username'],
            email=validate_data['email'],
            password=validate_data['password']
        )
        return user