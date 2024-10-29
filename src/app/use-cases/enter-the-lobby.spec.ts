import { randomUUID } from 'node:crypto';
import { describe } from 'node:test';
import { expect, it } from 'vitest';
import { User } from '../entities/user.js';
import { createNotification } from '../factories/notification-factory.js';
import { InMemoryLobbyRespository } from '../respositories/in-memory/in-memory-lobby-repository.js';
import { InMemoryNotificationRepository } from '../respositories/in-memory/in-memory-notification-repository.js';
import { InMemoryUserRepository } from '../respositories/in-memory/in-memory-user-repository.js';
import { AcceptInvitation } from './accept-invitation.js';
import { CreateLobby } from './create-lobby.js';
import { CreateUser } from './create-user.js';
import { EnjoyInLobby } from './enter-the-lobby.js';

describe('enjoy-in-lobby', () => {
  it('should be able to enjoy in a lobby', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const acceptInvitation = new AcceptInvitation(notificationRepository);
    const userRepository = new InMemoryUserRepository();
    const lobbyRepository = new InMemoryLobbyRespository(
      userRepository,
      notificationRepository,
    );

    const createLobby = new CreateLobby(lobbyRepository);
    const createUser = new CreateUser(userRepository);
    const enjoyInLobby = new EnjoyInLobby(lobbyRepository);

    const user = await createUser.execute({
      id: randomUUID(),
      email: 'johnsmith@gmail.com',
      password: '123456',
      username: 'John Smith',
    });

    const sut = await createLobby.execute({
      id: randomUUID(),
      maxPlayers: 4,
      owner: new User({
        id: randomUUID(),
        email: 'johndoe@gmail.com',
        username: 'John Doe',
        password: '123456',
      }),
      players: [],
    });

    const notification = createNotification({
      id: randomUUID(),
      lobbyId: sut.id,
      userId: user.id,
    });

    await notificationRepository.sendNotification({ notification });
    await acceptInvitation.execute({ notificationId: notification.id });

    await enjoyInLobby.execute({ lobbyId: sut.id, userId: user.id });

    expect(sut.players.length).toBe(1);
    expect(sut.players[0].id).toBe(user.id);
  });
});
