import type { User } from '../entities/user.js';

interface Create {
  user: User;
}

interface FindById {
  userId: string;
}

export interface UserRespository {
  create({ user }: Create): Promise<void>;
  findById({ userId }: FindById): Promise<User | undefined>;
}
