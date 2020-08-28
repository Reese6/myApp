from django.db import models
from django.contrib.auth.models import User
from django.core.files.storage import FileSystemStorage
from django.conf import settings
import uuid


image_storage = FileSystemStorage(
    # Physical file location ROOT
    location=u'{0}/'.format(settings.MEDIA_ROOT),
    # Url for file
    base_url=u'{0}/'.format(settings.MEDIA_URL),
)


def image_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/my_sell/picture/<filename>
    return u'projects/{0}'.format(filename)


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    admin = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='admin')
    users = models.ManyToManyField(User, related_name='users')
    create_date = models.DateField()
    avatar = models.ImageField(
        upload_to=image_directory_path, storage=image_storage, default='')

    def __str__(self):
        return self.name


class Tasks(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150)
    description = models.TextField()
    users = models.ManyToManyField(User)
    # column = models.ForeignKey(Column, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# class Board(models.Model):
#     name = models.CharField(max_length=100)
#     project = models.ForeignKey(Project, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.name


# class Column(models.Model):
#     name = models.CharField(max_length=100)
#     index = models.IntegerField()
#     board = models.ForeignKey(Board, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.name


# class Task(models.Model):
#     name = models.CharField(max_length=150)
#     description = models.TextField()
#     users = models.ManyToManyField(User)
#     column = models.ForeignKey(Column, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.name


# class CommentTask(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     task = models.ForeignKey(Task, on_delete=models.CASCADE)
#     comment = models.CharField(max_length=150)

#     def __str__(self):
#         return self.comment
