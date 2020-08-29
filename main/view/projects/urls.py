from django.urls import path
from main.view.projects import views


urlpatterns = [
    path('', views.index),
    path('<int:project_id>', views.show),
    # path('<int:project_id>', views.show),

    path('get_projects/', views.get_projets),
    path('<int:project_id>/get_show_project/', views.get_show_project),
]
