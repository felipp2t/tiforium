import { expect, test } from 'vitest';
import { createUser } from '../factories/user-factory.js';
import { User } from './user.js';

test('create user', () => {
  const user = createUser({
    email: 'johndoe@gmail.com',
    password: '123456',
    username: 'John Doe',
  });

  expect(user).toBeInstanceOf(User);
  expect(user.username).toEqual('John Doe');
});

test('cannot create user with invalid email', () => {
  expect(() => {
    createUser({
      email: '',
      password: '123456',
      username: 'John Doe',
    });
  }).toThrowError('Invalid email');
});

test('cannot create user without username', () => {
  expect(() => {
    createUser({
      email: 'johndoe@gmail.com',
      password: '123456',
      username: '',
    });
  }).toThrowError('Invalid username');
});
