from django.db import models

class Slider(models.Model):
    img = models.ImageField(upload_to = 'images')
    header = models.CharField(max_length = 100)
    category = models.CharField(max_length = 50)