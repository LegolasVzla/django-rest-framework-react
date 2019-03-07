from rest_framework import serializers
from .models import Animal

#class AnimalSerializer(serializers.HyperlinkedModelSerializer):
class AnimalSerializer(serializers.ModelSerializer):
	class Meta:
		model = Animal
		fields = '__all__'