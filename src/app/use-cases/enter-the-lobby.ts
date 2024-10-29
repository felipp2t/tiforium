import type { UUID } from 'node:crypto';
import type { LobbyRespository } from '../respositories/lobby-repository.js';

interface EnjoyInLobbyRequest {
  lobbyId: UUID;
  userId: UUID;
}

export class EnjoyInLobby {
  constructor(private lobbyRepository: LobbyRespository) {}

  async execute({ lobbyId, userId }: EnjoyInLobbyRequest) {
    await this.lobbyRepository.enterTheLobby({ lobbyId, userId });
  }
}
