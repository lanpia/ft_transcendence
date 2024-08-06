from django.shortcuts import render, get_object_or_404
from .models import CustomUser

def user_profile(request, username):
    user = get_object_or_404(CustomUser, username=username)
    return render(request, 'users/profile.html', {'user_profile': user})
