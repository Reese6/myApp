from django.shortcuts import render, redirect
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate
# from .forms import UserRegister

# Create your views here.

def index(request):
  return render(request, 'main/index.html')


# def register(request):
#   form = None
#   if request.method == 'POST':
#     form = UserRegister(request.POST)
#     email = request.POST.get('email')

#     if User.objects.filter(email = email).exists():
#       ...
#     else:
#       if form.is_valid():
#         ins = form.save()
#         username = form.cleaned_data['username']
#         password = form.cleaned_data['password']

#         user = authenticate(username = username, password = password, email = email)
#         ins.email = email
#         ins.save()
#         form.save_m2m()
#         return redirect('/')

#   else:
#     form = UserRegister()

#   context = { 'form': form }
