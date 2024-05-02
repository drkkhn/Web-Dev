from rest_framework import serializers
from .models import Category, Size, Hat, Top, Pant, Shoe

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField(max_length = 25)
    
    def create(self, validated_data):
        return Category.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
    
class SizeSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    size = serializers.CharField(max_length = 20)
    
    def create(self, validated_data):
        return Size.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.size = validated_data.get('size', instance.size)
        instance.save()
        return instance

class HatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hat
        fields = '__all__'

class TopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Top
        fields = '__all__'
        
class PantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pant
        fields = '__all__'

class ShoeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = '__all__'

