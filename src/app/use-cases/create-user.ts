import type { UUID } from 'node:crypto';
import { User } from '../entities/user.js';
import type { UserRespository } from '../respositories/user-respository.js';

interface CreateUserRequest {
  id: UUID;
  username: string;
  email: string;
  password: string;
}

type CreateUserResponse = User;

export class CreateUser {
  constructor(private userRepository: UserRespository) {}

  async execute({
    id,
    username,
    email,
    password,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({
      id,
      username,
      email,
      password,
    });

    await this.userRepository.create({ user });

    return user;
  }
}
