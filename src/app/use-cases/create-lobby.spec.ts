import { randomUUID } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { Lobby } from '../entities/lobby.js';
import { User } from '../entities/user.js';
import { createUser } from '../factories/user-factory.js';
import { InMemoryLobbyRespository } from '../respositories/in-memory/in-memory-lobby-repository.js';
import { InMemoryNotificationRepository } from '../respositories/in-memory/in-memory-notification-repository.js'
import { InMemoryUserRepository } from '../respositories/in-memory/in-memory-user-repository.js';
import { CreateLobby } from './create-lobby.js';

describe('CreateLobby', () => {
  it('should be able to create a lobby', () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const userRepository = new InMemoryUserRepository();
    const lobbyRepository = new InMemoryLobbyRespository(
      userRepository,
      notificationRepository,
    );
    const sut = new CreateLobby(lobbyRepository);

    expect(
      sut.execute({
        id: randomUUID(),
        maxPlayers: 4,
        owner: createUser({
          email: 'johndoe@gmail.com',
          username: 'John Doe',
          password: '123456',
        }),
        players: [],
      }),
    ).resolves.toBeInstanceOf(Lobby);
  });

  it('should not be able to create two lobby by the same owner', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const userRepository = new InMemoryUserRepository();
    const lobbyRepository = new InMemoryLobbyRespository(
      userRepository,
      notificationRepository,
    );
    const sut = new CreateLobby(lobbyRepository);

    const lobby = await sut.execute({
      id: randomUUID(),
      maxPlayers: 4,
      owner: createUser({
        email: 'johndoe@gmail.com',
        username: 'John Doe',
        password: '123456',
      }),
      players: [],
    });

    expect(
      sut.execute({
        id: randomUUID(),
        maxPlayers: 4,
        owner: new User({
          id: lobby.owner.id,
          email: 'johndoe@gmail.com',
          username: 'John Doe',
          password: '123456',
        }),
        players: [],
      }),
    ).rejects.toThrowError('User already has a lobby');
  });
});
