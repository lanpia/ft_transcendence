from django.urls import path
from .views import user_profile
from .views import UserListView, UserDetailView, UserCreateView

urlpatterns = [
    path('profile/<str:username>/', user_profile, name='user_profile'),
	path('users/', UserListView.as_view(), name='user-list'),
	path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
	path('users/create/', UserCreateView.as_view(), name='user-create'),
]
