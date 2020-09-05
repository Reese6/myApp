from django.urls import path
from main.view.projects import views
from django.contrib.auth.decorators import login_required


urlpatterns = [
    path('', login_required(views.index)),
    path('new', login_required(views.index)),
    path('<int:project_id>', login_required(views.show)),
    # path('<int:project_id>', views.show),

    path('get_projects/', login_required(views.get_projets)),
    path('<int:project_id>/get_show_project/',
         login_required(views.get_show_project)),
]
