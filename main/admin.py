from django.contrib import admin

# Register your models here.
from .models import Project, Column, Task, CommentTask


admin.site.register(Project)
# admin.site.register(Board)
admin.site.register(Column)
admin.site.register(Task)
admin.site.register(CommentTask)
