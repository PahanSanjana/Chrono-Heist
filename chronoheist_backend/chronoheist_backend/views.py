from rest_framework.decorators import api_view
from .models import GameSave

@api_view(['POST'])
def save_game(request):
    GameSave.objects.create(
        player_id=request.data['player_id'],
        level=request.data['level']
    )
    return Response({"status": "saved"})