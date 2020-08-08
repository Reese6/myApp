from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
# from django.core.context_processors import csrf
from .forms import LoginForm


def index(request):
    return render(request, 'main/index.html')


def user_login(request):
    # return JsonResponse({'newTheme': 'hello'})
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(
                username=cd['username'], password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/')
                else:
                    return redirect('/account/login')
            else:
                return redirect('/account/login')
        else:
            return redirect('/account/login')
    else:
        return redirect('/account/login')
