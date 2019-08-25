from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    # return HttpResponse("Hello Fıstklı Baklava") 
    return render(request, 'home/index.html', {'slider':'bilge adam django'})

def contact(request):
    return render(request,'home/contact.html')