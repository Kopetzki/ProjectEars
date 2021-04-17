from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render

from books.serializer import BookSerializer
from books.models import Book


#WILL RETURN ALL BOOKS
@api_view(['GET'])
def getBooks(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response( serializer.data )#this will return the JSON to front


#WILL RETURN BOOK BY ID
@api_view(['GET'])
def getBook(request, pk):
    book = Book.objects.get(_id=pk)
    serializer = BookSerializer(book, many=False)#this will grab individual book 
    #book = None
    #for i in books:
        #if i['_id'] == pk:
         #   book = i
          #  break 
    return Response (serializer.data)