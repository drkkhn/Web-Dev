from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Top
from .serializers import TopSerializer

class TopsCRUD(APIView):
    def get(self, request):
        tops = Top.objects.all()
        serializer = TopSerializer(tops, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TopSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TopCRUD(APIView):
    def get_object(self, id):
        try:
            print(id)
            top = Top.objects.get(pk=id)
            print("Found Top:", top)  # Debug print
            return top
        except Top.DoesNotExist:
            print("Top not found")  # Debug print
            print(id)
            return None

    def get(self, request, id):
        top = self.get_object(id)
        if top:
            serializer = TopSerializer(top)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        top = self.get_object(id)
        if top:
            serializer = TopSerializer(top, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, id):
        top = self.get_object(id)
        if top:
            top.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)