from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .models import Task
from rest_framework.response import Response
from rest_framework import status
from .serializers import TaskSerializer,RegisterSerializer
from rest_framework.permissions import IsAuthenticated

class TaskViewset(ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        return Task.objects.filter(user = self.request.user)
    def perform_create(self, serializer):
        serializer.save(user = self.request.user)
    
    
class RegisterView(APIView):
    def post(self,request):
        serializer = RegisterSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
        
     
            