#File to configure URL to trigger views for returns. This file is in charge of connecting urls to views
#We will need to import urls and views to work 
from django.urls import path

from books.views import book_views as views


urlpatterns = [
 
    path('', views.getBooks, name="books"),
    path('<str:pk>/', views.getBook, name="book"),
    
]


