from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
		class Meta:
				model = Game
				fields = '__all__'
				# fields = ['id', 'player1', 'player2', 'score1', 'score2', 'status']
