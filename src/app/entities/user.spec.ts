import { expect, test } from 'vitest';
import { User } from './user';

test('create uesr', () => {
  const user = new User({
    email: 'johndoe@gmail.com',
    username: 'John Doe',
    password: '123456',
  });

  expect(user).toBeInstanceOf(User);
  expect(user.username).toEqual('John Doe');
});

test('cannot create user with invalid email', () => {
  expect(() => {
    new User({
      email: '',
      username: 'John Doe',
      password: '123456',
    });
  }).toThrowError('Invalid email');
});

test('cannot create user without username', () => {
  expect(() => {
    new User({
      email: 'johndoe@gmail.com',
      username: '',
      password: '123456',
    });
  }).toThrowError('Invalid username');
});
