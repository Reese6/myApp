from django.urls import path
from main.view.projects import views


urlpatterns = [
    path('', views.index),
    path('<int:project_id>', views.show),
    path('projects/<int:project_id>', views.show),

    path('get_projects/', views.get_projets),
]
