from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('desks', views.index),
    path('settings', views.index),
    path('login', views.index),
]
