from django.db import models

# Create your models here.



class user(models.Model):
           uname=models.CharField(max_length=50)
           email_id=models.EmailField()
           password=models.CharField(max_length=100)
           phoneNo=models.CharField(max_length=10)
           
