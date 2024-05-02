from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Pant
from .serializers import PantSerializer

class PantsCRUD(APIView):
    def get(self, request):
        pants = Pant.objects.all()
        serializer = PantSerializer(pants, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PantCRUD(APIView):
    def get_object(self, id):
        try:
            print(id)
            pant = Pant.objects.get(pk=id)
            print("Found Pant:", pant)  # Debug print
            return pant
        except Pant.DoesNotExist:
            print("Pant not found")  # Debug print
            print(id)
            return None

    def get(self, request, id):
        pant = self.get_object(id)
        if pant:
            serializer = PantSerializer(pant)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        pant = self.get_object(id)
        if pant:
            serializer = PantSerializer(pant, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        pant = self.get_object(id)
        if pant:
            pant.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)