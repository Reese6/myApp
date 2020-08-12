from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms.models import model_to_dict
from django.core.exceptions import ObjectDoesNotExist


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
    args = {}
    args['form'] = UserCreationForm()
    if request.method == 'POST':
        try:
            u = User.objects.get(username=request.POST.get('username', ''))
            return JsonResponse({'status': False, 'error': 'Пользоватетель с таким именем уже существет!'})
        except ObjectDoesNotExist:
            new_form = UserCreationForm(request.POST)
            if new_form.is_valid():
                new_form.save()
                # newuser = authenticate(
                #     username=new_form.cleaned_data['username'], password=new_form.cleaned_data['password1'])
                # login(request, newuser)
                return JsonResponse({'status': True})
            else:
                return JsonResponse({'status': False, 'error': 'Пароль слишком короткий или слабый'})
    else:
        return render(request, 'main/register.html', args)


def get_user(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            # qs_json = serialize('json', request.user)
            return JsonResponse({'user': model_to_dict(request.user), 'status': True}, safe=False)
        else:
            return JsonResponse({'status': False})
