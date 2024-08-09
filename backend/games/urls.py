from django.urls import path
from .views import ranking_board
from .views import GameListView, GameDetailView, GameCreateView

urlpatterns = [
    path('ranking/', ranking_board, name='ranking_board'),
    path('', GameListView.as_view(), name='game-list'),
    path('<int:pk>/', GameDetailView.as_view(), name='game-detail'),
    path('create/', GameCreateView.as_view(), name='game-create'),
]
