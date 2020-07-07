from django.shortcuts import render, redirect
from .forms import UserRegister

# Create your views here.

def index(request):
  return render(request, 'main/index.html')


def register(request):
  form = None
  if request.method == 'POST':
    form = UserRegisterForm(request.POST)

    if form.is_valid():
      ins = form.save()
      username = form.cleaned_data['username']
      password = form.cleaned_data['password']
      email = request.POST.get('email')
  else:
    form = UserRegisterForm()

  context = { 'form': form }
