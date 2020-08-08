from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm


def index(request):
    return render(request, 'main/index.html')


def user_logout(request):
    logout(request)
    return redirect('/account/login')


def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'user_login': True})
        else:
            return JsonResponse({'user_login': False})


def user_registration(request):
    if request.method == 'POST':
        new_form = UserCreationForm(request.POST)

        if new_form.is_valid():
            new_form.save()
            newuser = authenticate(
                username=new_form.cleaned_data['username'], password=new_form.cleaned_data['password'])
            login(request, newuser)
            return JsonResponse({'user_registration': True})
        else:
            return JsonResponse({'user_registration': False})
