from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Hat
from .serializers import HatSerializer

class HatsCRUD(APIView):
    def get(self, request):
        hats = Hat.objects.all()
        serializer = HatSerializer(hats, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = HatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HatCRUD(APIView):
    def get_object(self, id):
        try:
            print(id)
            hat = Hat.objects.get(pk=id)
            print("Found Hat:", hat)  # Debug print
            return hat
        except Hat.DoesNotExist:
            print("Hat not found")  # Debug print
            print(id)
            return None

    def get(self, request, id):
        hat = self.get_object(id)
        if hat:
            serializer = HatSerializer(hat)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        hat = self.get_object(id)
        if hat:
            serializer = HatSerializer(hat, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        hat = self.get_object(id)
        if hat:
            hat.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)