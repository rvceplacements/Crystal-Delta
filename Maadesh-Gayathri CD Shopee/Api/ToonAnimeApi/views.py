from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from pymongo.mongo_client import MongoClient
import urllib 
from django.views.decorators.csrf import csrf_exempt
import json
from .models import user


#####################################################
#                                                   #
#                   USER VIEW                       #
#                                                   #
#####################################################  


@csrf_exempt
def home(request):
    if request.method=="GET":
        return render(request,'home.html')
    
@csrf_exempt
def explore(request):
    if request.method=="GET":
        return render(request,'explore.html')

@csrf_exempt
def createAccount(request):
    if request.method=="POST":
     print(request.body)
     email=request.POST.get('emailID')
     name=request.POST.get('name')
     phone=request.POST.get('phone')
     password=request.POST.get('password')
     print(email,name,password,phone)
     
     if email==None:
        
        if user.objects.filter(phoneNo=phone): 
           return HttpResponse("userfound")
        else:
            userData=user(uname=name,email_id=email, password=password,phoneNo=phone)
            userData.save()
       
            return HttpResponse("Success")
   
     else:
        
         if user.objects.filter(email_id=email):
             return HttpResponse("userfound")
         else:
           userData=user(uname=name,email_id=email, password=password,phoneNo=phone)
           userData.save()
       
           return HttpResponse("Success") 
         
    else:
         return render(request,'signup.html')


@csrf_exempt
def login(request):
    if request.method=="POST":
        phone=request.POST.get('phone')
        email=request.POST.get("emailID")
        password=request.POST.get('password')
        if phone==" ":
            data={
             "emailID":email,
             "password":password
            }
           
            if user.objects.filter(email_id=email):
                 if user.objects.filter(email_id=email, password=password):
                     return HttpResponse("success")
                 else:
                     return HttpResponse("wrongPassword")
            else:
                return HttpResponse("userNotFound")
           
            
                
        else:
             data={
             "phone":phone,
             "password":password
            }
             print(data)
             if user.objects.filter(phoneNo=phone):
                 if user.objects.filter(phoneNo=phone, password=password):
                     return HttpResponse("success")
                 else:
                     return HttpResponse("wrongPassword")
             else:
                return HttpResponse("userNotFound")
    else:
         return render(request,'login.html')

