import type { User } from '../entities/user';

export interface UserRespository {
  create(user: User): Promise<void>;
  findById(id: string): Promise<User | undefined>;
}
