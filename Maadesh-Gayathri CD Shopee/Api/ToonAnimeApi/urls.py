from django.urls import path
from ToonAnimeApi import views


urlpatterns=[
    path('home',views.home,name='home'),
    path('explore',views.explore,name='explore'),
    path('signup',views.createAccount,name='signup'),
    path('',views.login,name='log'),
   

]