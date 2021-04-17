#File to configure URL to trigger views for returns. This file is in charge of connecting urls to views
#We will need to import urls and views to work 
from django.urls import path 

from books.views import user_views as views


urlpatterns = [
    
    path('', views.getUsers, name="users"),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    path('register/', views.registerUser, name = 'register'),

    path('profile/', views.getUserProfile, name="user-profile"),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),
    

]

