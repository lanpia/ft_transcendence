from rest_framework import generics
from .models import Game
from .serializers import GameSerializer
from django.shortcuts import render
from users.models import CustomUser

def ranking_board(request):
    # 승리 횟수를 기준으로 사용자들을 정렬하여 상위 10명의 사용자 가져오기
    top_players = CustomUser.objects.all().order_by('-wins')[:10]
    return render(request, 'games/ranking_board.html', {'top_players': top_players})

class GameListView(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameCreateView(generics.CreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
