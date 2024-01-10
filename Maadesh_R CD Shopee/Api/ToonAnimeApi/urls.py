from django.urls import path
from ToonAnimeApi import views


urlpatterns=[
    path('',views.home,name='home'),
    path('explore',views.explore,name='explore'),
    path('signup',views.createAccount,name='signup'),
    path('login',views.login,name='log'),
   

]