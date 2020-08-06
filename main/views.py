from django.shortcuts import render, redirect
from django.http import JsonResponse


def index(request):
    return render(request, 'main/index.html')


def user_login(request):
    return JsonResponse({'newTheme': 'hello'})
    # if request.method == 'POST':
    #     form = LoginForm(request.POST)
    #     if form.is_valid():
    #         cd = form.cleaned_data
    #         user = authenticate(username=cd['username'], password=cd['password'])
    #         if user is not None:
    #             if user.is_active:
    #                 login(request, user)
    #                 return HttpResponse('Authenticated successfully')
    #             else:
    #                 return HttpResponse('Disabled account')
    #         else:
    #             return HttpResponse('Invalid login')
    # else:
    #     form = LoginForm()
    # return render(request, 'accounts/login.html', {'form': form})
