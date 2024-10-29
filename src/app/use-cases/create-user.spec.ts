import { randomUUID } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { User } from '../entities/user.js';
import { InMemoryUserRepository } from '../respositories/in-memory/in-memory-user-repository.js';
import { CreateUser } from './create-user.js';

describe('CreateUser', () => {
  it('should be able to create a user', () => {
    const userRepository = new InMemoryUserRepository();
    const sut = new CreateUser(userRepository);

    expect(
      sut.execute({
        id: randomUUID(),
        email: 'johndoe@gmail.com',
        password: '123456',
        username: 'John Doe',
      }),
    ).resolves.toBeInstanceOf(User);
  });
});
