from django.urls import path
from main.view.projects import views


urlpatterns = [
    path('', views.index),

    path('get_projects/', views.get_projets)
]
