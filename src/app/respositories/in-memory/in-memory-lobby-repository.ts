import { type UUID, randomUUID } from 'node:crypto';
import type { Lobby } from 'src/app/entities/lobby.js';
import { createNotification } from '../../factories/notification-factory.js';
import type { LobbyRespository } from '../lobby-repository.js';
import type { NotificationRepository } from '../notification-repository.js';
import type { InMemoryUserRepository } from './in-memory-user-repository.js';

export class InMemoryLobbyRespository implements LobbyRespository {
  private lobbies: Lobby[] = [];

  constructor(
    private userRepository: InMemoryUserRepository,
    private notificationRepository: NotificationRepository,
  ) {}

  async create({ lobby }: { lobby: Lobby }): Promise<void> {
    this.lobbies.push(lobby);
  }

  async findByOwner({
    ownerId,
  }: { ownerId: UUID }): Promise<Lobby | undefined> {
    return this.lobbies.find(lobby => lobby.owner.id === ownerId);
  }

  async findById({ lobbyId }: { lobbyId: UUID }): Promise<Lobby | undefined> {
    return this.lobbies.find(lobby => lobby.id === lobbyId);
  }

  async inviteUser({
    lobbyId,
    userId,
  }: { lobbyId: UUID; userId: UUID }): Promise<void> {
    const lobby = this.lobbies.find(lobby => lobby.id === lobbyId);

    if (!lobby) {
      throw new Error('Lobby not found');
    }

    const user = await this.userRepository?.findById({ userId: userId });

    if (!user) {
      throw new Error('User not found');
    }

    const notification = createNotification({
      id: randomUUID(),
      lobbyId,
      userId,
    });

    await this.notificationRepository.sendNotification({
      notification,
    });
  }

  async enterTheLobby({ lobbyId, userId }: { lobbyId: UUID; userId: UUID }) {
    const lobby = await this.findById({ lobbyId });

    if (!lobby) {
      throw new Error('Lobby not found');
    }

    const user = await this.userRepository.findById({ userId });

    if (!user) {
      throw new Error('User not found');
    }

    if (lobby.players.length >= lobby.maxPlayers) {
      throw new Error('Lobby is full');
    }

    lobby.players.push(user);
  }
}
