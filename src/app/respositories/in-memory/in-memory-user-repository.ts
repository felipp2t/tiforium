import type { UUID } from 'node:crypto';
import type { User } from 'src/app/entities/user.js';
import type { UserRespository } from '../user-respository.js';

export class InMemoryUserRepository implements UserRespository {
  private users: User[] = [];

  async create({ user }: { user: User }): Promise<void> {
    this.users.push(user);
  }

  async findById({ userId }: { userId: UUID }): Promise<User | undefined> {
    return this.users.find(user => user.id === userId);
  }
}
