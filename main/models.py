from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    admin = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='admin')
    users = models.ManyToManyField(User, related_name='users')
    create_date = models.DateField()
    avatar = models.ImageField(upload_to='images', default='')

    def __str__(self):
        return self.name


class Board(models.Model):
    name = models.CharField(max_length=100)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Column(models.Model):
    name = models.CharField(max_length=100)
    index = models.IntegerField()
    board = models.ForeignKey(Board, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    users = models.ManyToManyField(User)
    column = models.ForeignKey(Column, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class CommentTask(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    comment = models.CharField(max_length=150)

    def __str__(self):
        return self.comment
