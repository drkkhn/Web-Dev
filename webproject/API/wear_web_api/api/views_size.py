from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import SizeSerializer

from .models import Size

@api_view(['GET', 'POST'])
def size_list(request):
    if request.method == 'GET':
        sizes = Size.objects.all()
        serializer = SizeSerializer(sizes, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SizeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def size_details(request, id):
    try:
        size = Size.objects.get(pk=id)
    except Size.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SizeSerializer(size)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SizeSerializer(size, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        size.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)