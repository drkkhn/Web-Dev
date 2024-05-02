from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Shoe
from .serializers import ShoeSerializer

class ShoesCRUD(APIView):
    def get(self, request):
        shoes = Shoe.objects.all()
        serializer = ShoeSerializer(shoes, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ShoeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ShoeCRUD(APIView):
    def get_object(self, id):
        try:
            print(id)
            shoe = Shoe.objects.get(pk=id)
            print("Found shoe:", shoe)  # Debug print
            return shoe
        except Shoe.DoesNotExist:
            print("Shoe not found")  # Debug print
            print(id)
            return None

    def get(self, request, id):
        shoe = self.get_object(id)
        if shoe:
            serializer = ShoeSerializer(shoe)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        shoe = self.get_object(id)
        if shoe:
            serializer = ShoeSerializer(shoe, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        shoe = self.get_object(id)
        if shoe:
            shoe.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)