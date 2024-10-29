import type { UUID } from 'node:crypto';
import { Lobby } from '../entities/lobby.js';
import type { User } from '../entities/user.js';
import type { LobbyRespository } from '../respositories/lobby-repository.js';

interface CreateLobbyRequest {
  id: UUID;
  maxPlayers: number;
  players: User[];
  owner: User;
}

type CreateLobbyResponse = Lobby;

export class CreateLobby {
  constructor(private lobbyRespository: LobbyRespository) {}

  async execute({
    id,
    maxPlayers,
    owner,
    players,
  }: CreateLobbyRequest): Promise<CreateLobbyResponse> {
    const lobbyByOwner = await this.lobbyRespository.findByOwner({
      ownerId: owner.id,
    });

    if (lobbyByOwner) {
      throw new Error('User already has a lobby');
    }

    const lobby = new Lobby({
      id,
      maxPlayers,
      owner,
      players,
    });

    await this.lobbyRespository.create({ lobby });

    return lobby;
  }
}
