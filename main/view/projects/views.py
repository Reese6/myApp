from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.core.serializers import serialize
from main.models import Project


def index(request):
    if not request.user.is_authenticated:
        return redirect('/account/login')
    else:
        return render(request, 'main/index.html')


def get_projets(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            data = Project.objects.filter(users=request.user).values()
            return JsonResponse({'data': list(data), 'status': True}, safe=False)
        else:
            return JsonResponse({'status': False})
