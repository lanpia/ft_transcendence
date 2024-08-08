from django.db import models
from django.conf import settings

class Game(models.Model):
    player1 = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='player1_games', on_delete=models.CASCADE)
    player2 = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='player2_games', on_delete=models.CASCADE)
    score1 = models.IntegerField(default=0)
    score2 = models.IntegerField(default=0)
    status = models.CharField(max_length=10, choices=[('ongoing', 'Ongoing'), ('completed', 'Completed')])

    def save(self, *args, **kwargs):
        # 게임이 완료된 경우 승리 횟수 업데이트
        if self.status == 'completed':
            if self.score1 > self.score2:
                self.player1.wins += 1
                self.player1.save()
            elif self.score2 > self.score1:
                self.player2.wins += 1
                self.player2.save()
        super(Game, self).save(*args, **kwargs)

    def __str__(self):
        return f"Game {self.id} - {self.player1} vs {self.player2}"

class Tournament(models.Model):
    name = models.CharField(max_length=100)
    games = models.ManyToManyField(Game)

    def __str__(self):
        return self.name