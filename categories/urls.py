from django.contrib import admin
from django.urls import path
from . import views  # views.py içerisinde yer alan tüm view'ları dahil et



urlpatterns = [
    path('', views.index, name='index'),
]


# http://127.0.0.1:8000/


# www.deneme.com\categories