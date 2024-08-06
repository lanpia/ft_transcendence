from django.urls import path
from .views import UserCreateView, UserListView, UserRetrieveView

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/create/', UserCreateView.as_view(), name='user-create'),
    path('users/<str:user_id>/', UserRetrieveView.as_view(), name='user-detail'),
]
