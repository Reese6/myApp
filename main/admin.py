from django.contrib import admin

# Register your models here.
from .models import Project, Tasks


admin.site.register(Project)
# admin.site.register(Board)
# admin.site.register(Column)
admin.site.register(Tasks)
# admin.site.register(CommentTask)
