import { randomUUID } from 'node:crypto';
import { expect, test } from 'vitest';
import { Notification } from './notification';
import { User } from './user';

test('send invitation notification', () => {
  const user = new User({
    id: randomUUID(),
    email: 'johndoe@gmail.com',
    username: 'JohnDoe',
    password: '123456',
  });

  const notification = new Notification({
    id: randomUUID(),
    lobbyId: randomUUID(),
    userId: user.id,
  });

  expect(notification).toBeInstanceOf(Notification);
  expect(notification.userId).toBe(user.id);
});
