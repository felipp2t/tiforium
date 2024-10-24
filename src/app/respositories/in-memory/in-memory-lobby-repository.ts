import { type UUID, randomUUID } from 'node:crypto';
import type { Lobby } from 'src/app/entities/lobby';
import { Notification } from 'src/app/entities/notification';
import type { LobbyRespository } from '../lobby-repository';
import type { NotificationRepository } from '../notification-repository';
import type { InMemoryUserRepository } from './in-memory-user-repository';

export class InMemoryLobbyRespository implements LobbyRespository {
  private lobbies: Lobby[] = [];

  constructor(
    private userRepository: InMemoryUserRepository,
    private notificationRepository: NotificationRepository,
  ) {}

  async create(lobby: Lobby): Promise<void> {
    this.lobbies.push(lobby);
  }

  async findByOwner(ownerId: UUID): Promise<Lobby | undefined> {
    return this.lobbies.find(lobby => lobby.owner.id === ownerId);
  }

  async inviteUser({
    lobbyId,
    userId,
  }: { lobbyId: UUID; userId: UUID }): Promise<void> {
    const lobby = this.lobbies.find(lobby => lobby.id === lobbyId);

    if (!lobby) {
      throw new Error('Lobby not found');
    }

    const user = await this.userRepository?.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const notification = new Notification({
      id: randomUUID(),
      lobbyId,
      userId,
    });

    await this.notificationRepository.sendNotification({
      notification,
    });
  }
}