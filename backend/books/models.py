from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Book(models.Model):  #models.Models turns class into Model
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)#keep book if user is deleted
    name = models.CharField(max_length = 200, null=True, blank=True )
    image = models.ImageField(null =True, blank=True)
    catergory = models.CharField(max_length = 200, null=True, blank=True )
    age = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True )
    rating = models.DecimalField(max_digits= 7, decimal_places=2 )
    numReviews = models.IntegerField(null=True, blank=True, default=0 )
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)
   

    def __str__(self):
        return self.name

class Review(models.Model):
    book = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Library(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)

class LibraryBook(models.Model):
    book = models.ForeignKey(Book, on_delete=models.SET_NULL, null = True)
    name = models.CharField(max_length = 200, null=True, blank=True )
    image = models.CharField(max_length = 200, null=True, blank=True )
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name