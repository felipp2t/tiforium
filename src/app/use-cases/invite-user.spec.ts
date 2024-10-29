import { describe, expect, it } from 'vitest';
import type { Notification } from '../entities/notification.js';
import { User } from '../entities/user.js';
import { InMemoryLobbyRespository } from '../respositories/in-memory/in-memory-lobby-repository.js';
import { InMemoryNotificationRepository } from '../respositories/in-memory/in-memory-notification-repository.js';
import { InMemoryUserRepository } from '../respositories/in-memory/in-memory-user-repository.js';
import { CreateLobby } from './create-lobby.js';
import { CreateUser } from './create-user.js';

describe('InviteUser', () => {
  it('should be able to invite a user to a lobby', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const userRepository = new InMemoryUserRepository();
    const lobbyRepository = new InMemoryLobbyRespository(
      userRepository,
      notificationRepository,
    );

    const createLobby = new CreateLobby(lobbyRepository);
    const createUser = new CreateUser(userRepository);

    const user = await createUser.execute({
      id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
      email: 'felipe@gmail.com',
      password: '123456',
      username: 'Felipe R.',
    });

    const lobby = await createLobby.execute({
      id: '4e2bbba7-730e-4a87-8e32-bae54b527006',
      maxPlayers: 4,
      owner: new User({
        id: '312e02fe-99f2-4ad1-b5c2-ccdd8eb9fdf7',
        email: 'johndoe@gmail.com',
        username: 'John Doe',
        password: '123456',
      }),
      players: [],
    });

    await lobbyRepository.inviteUser({ userId: user.id, lobbyId: lobby.id });

    const notifications = await notificationRepository.getNotifications({
      userId: user.id,
    });
    expect(notifications).toBeDefined();
    expect(notifications.length).toBeGreaterThan(0);

    const firstNotification: Notification = notifications[0];
    expect(firstNotification).toBeDefined();
    expect(firstNotification.lobbyId).toBe(
      '4e2bbba7-730e-4a87-8e32-bae54b527006',
    );
    expect(firstNotification.userId).toBe(user.id);
  });
});
