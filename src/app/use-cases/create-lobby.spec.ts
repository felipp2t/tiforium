import { randomUUID } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { Lobby } from '../entities/lobby';
import { User } from '../entities/user';
import { InMemoryLobbyRespository } from '../respositories/in-memory/in-memory-lobby-repository';
import { InMemoryNotificationRepository } from '../respositories/in-memory/in-memory-notification-repository';
import { InMemoryUserRepository } from '../respositories/in-memory/in-memory-user-repository';
import { CreateLobby } from './create-lobby';

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
        owner: new User({
          id: randomUUID(),
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

    await sut.execute({
      id: randomUUID(),
      maxPlayers: 4,
      owner: new User({
        id: 'c6f72f1d-ef12-4d84-9e52-2b8321f8b10e',
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
          id: 'c6f72f1d-ef12-4d84-9e52-2b8321f8b10e',
          email: 'johndoe@gmail.com',
          username: 'John Doe',
          password: '123456',
        }),
        players: [],
      }),
    ).rejects.toThrowError('User already has a lobby');
  });
});
