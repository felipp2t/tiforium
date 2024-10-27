import { type UUID, randomUUID } from 'node:crypto';
import { User } from '../entities/user.js';

interface UserProps {
  readonly id?: UUID;
  username: string;
  email: string;
  password: string;
  readonly createdAt?: Date;
  updatedAt?: Date;
}

export const createUser = (props: UserProps): User => {
  return new User({
    id: props.id ?? randomUUID(),
    username: props.username,
    email: props.email,
    password: props.password,
    createdAt: props.createdAt,
  });
};
