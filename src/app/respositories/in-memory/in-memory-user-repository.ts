import type { User } from 'src/app/entities/user';
import type { UserRespository } from '../user-respository';

export class InMemoryUserRepository implements UserRespository {
  private users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }
}