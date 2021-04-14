#File to configure URL to trigger views for returns. This file is in charge of connecting urls to views
#We will need to import urls and views to work 
from django.urls import path #path function import

from . import views


urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    path('users/register/', views.registerUser, name = 'register'),

    path('users/profile/', views.getUserProfile, name="user-profile"),
    path('users/', views.getUsers, name="users"),

    path('books/', views.getBooks, name="books"),
    path('books/<str:pk>', views.getBook, name="book"),
    
]

