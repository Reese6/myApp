from django.shortcuts import render
from django.http import JsonResponse
from django.http import Http404
from main.models import Project, Task, Column


def index(request):
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


# def newProject(request):
#     if request.method == 'POST':


def get_projets(request):
    data = Project.objects.filter(users=request.user).values()
    return JsonResponse({'data': list(data), 'status': True}, safe=False)


def get_show_project(request, project_id):
    columns = Column.objects.filter(project__id=project_id)
    project = Project.objects.filter(pk=project_id).values()
    tasks = Task.objects.filter(column_id__in=columns).values()
    return JsonResponse({'project': list(project), 'columns': list(columns.values()), 'tasks': list(tasks), 'status': True}, safe=False)
