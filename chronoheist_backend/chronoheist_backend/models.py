from django.db import models

class GameSave(models.Model):
    player_id = models.CharField(max_length=100)  # Stores the player ID (max 100 characters)
    level = models.IntegerField(default=1)  # Stores the level the player is on (default is level 1)
    timestamp = models.DateTimeField(auto_now=True)  # Automatically sets the timestamp when the object is saved

    def __str__(self):
        return f"Player: {self.player_id}, Level: {self.level}"
