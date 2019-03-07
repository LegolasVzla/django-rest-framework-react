from animals.models import Animal
from rest_framework import viewsets, permissions
from .serializers import AnimalSerializer

class AnimalViewSet(viewsets.ModelViewSet):
	queryset = Animal.objects.all()
	permission_classes = [
		permissions.AllowAny
	]
	serializer_class = AnimalSerializer