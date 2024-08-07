from django.urls import path
from .views import ranking_board

urlpatterns = [
    path('ranking/', ranking_board, name='ranking_board'),
]
