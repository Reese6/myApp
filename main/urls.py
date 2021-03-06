from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('projects/', include('main.view.projects.urls')),
    path('profile/', views.index),
    path('account/login/', views.registration_login_view),
    path('account/registration/', views.registration_login_view),

    path('accounts/signin/', views.user_login),
    path('accounts/signup/', views.user_registration),
    path('get_user/', views.get_user),
    path('logout/', views.user_logout),
]
