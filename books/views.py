from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Book
from .books import books
from .serializer import BookSerializer

from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
from rest_framework import viewsets
# Create your views here. Using function based views for transparancy of code.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/books/',
        '/api/books/create/',

        '/api/books/upload/',
        '/api/books/<id>/',
        '/api/books/book/add',
    ]
    return Response( routes)

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

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()