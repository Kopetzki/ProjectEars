from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
import os

from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
from rest_framework import viewsets
# Create your views here. Using function based views for transparancy of code.


# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()