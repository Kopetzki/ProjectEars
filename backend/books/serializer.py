from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__' # can set for specific fields with [], use __all__ for all fields
        