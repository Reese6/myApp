from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('desks', views.index),
    path('settings', views.index),
    path('account/login', views.index),
    path('account/registration', views.index),

    path('accounts/signin', views.user_login),
    path('accounts/signup', views.user_registration),
    path('get_user', views.get_user),
    path('logout', views.user_logout),
]
