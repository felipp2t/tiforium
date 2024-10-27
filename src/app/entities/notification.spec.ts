import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { createNotification } from '../factories/notification-factory.js';
import { createUser } from '../factories/user-factory.js';
import { Notification } from './notification.js';
import type { User } from './user.js';

let user: User;

test('send invitation notification', () => {
  const notification = createNotification({
    lobbyId: randomUUID(),
    userId: user.id,
  });

  expect(notification).toBeInstanceOf(Notification);
  expect(notification.userId).toBe(user.id);
});

beforeAll(() => {
  user = createUser({
    email: 'johndoe@gmail.com',
    password: '123456',
    username: 'John Doe',
  });
});
