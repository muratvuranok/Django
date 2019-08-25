from django.shortcuts import render
from django.http import HttpResponse
from .models import Slider


def index(request):
    # return HttpResponse("Hello Fıstklı Baklava") 

    sliders = Slider.objects.all()
    
    return render(request, 'home/index.html',{ 'sliders': sliders })

def contact(request):
    return render(request,'home/contact.html')