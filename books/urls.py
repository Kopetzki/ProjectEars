#File to configure URL to trigger views for returns. This file is in charge of connecting urls to views
#We will need to import urls and views to work 
from django.urls import path #path function import
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('books', views.getBooks, name="books"),
    path('books/<str:pk>', views.getBook, name="book"),
    
]