from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.http import Http404
from main.models import Project


def index(request):
    if not request.user.is_authenticated:
        return redirect('/account/login')
    else:
        return render(request, 'main/index.html')


def show(request, project_id):
    try:
        obj = Project.objects.get(pk=project_id)
        if request.user in obj.users.all():
            return render(request, 'main/index.html')
        else:
            raise Http404("Страница не найдена :(")
    except Project.DoesNotExist:
        raise Http404("Страница не найдена :(")


def get_projets(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            data = Project.objects.filter(users=request.user).values()
            return JsonResponse({'data': list(data), 'status': True}, safe=False)
        else:
            return JsonResponse({'status': False})
