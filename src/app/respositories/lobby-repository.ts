import type { UUID } from 'node:crypto';
import type { Lobby } from '../entities/lobby.js';

interface Create {
  lobby: Lobby;
}

interface FindByOwner {
  ownerId: UUID;
}

interface FindById {
  lobbyId: UUID;
}

interface InviteUser {
  lobbyId: UUID;
  userId: UUID;
}

interface EnterTheLobby {
  lobbyId: UUID;
  userId: UUID;
}

export interface LobbyRespository {
  create({ lobby }: Create): Promise<void>;
  findByOwner({ ownerId }: FindByOwner): Promise<Lobby | undefined>;
  findById({ lobbyId }: FindById): Promise<Lobby | undefined>;
  inviteUser({ lobbyId, userId }: InviteUser): Promise<void>;
  enterTheLobby({ lobbyId, userId }: EnterTheLobby): Promise<void>;
}
