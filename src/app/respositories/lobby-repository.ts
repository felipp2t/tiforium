import type { UUID } from 'node:crypto';
import type { Lobby } from '../entities/lobby.js';

interface InviteUser {
  lobbyId: UUID;
  userId: UUID;
}

export interface LobbyRespository {
  create(lobby: Lobby): Promise<void>;
  findByOwner(ownerId: string): Promise<Lobby | undefined>;
  inviteUser({ lobbyId, userId }: InviteUser): Promise<void>;
}
