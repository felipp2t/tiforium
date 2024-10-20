import { randomUUID } from 'node:crypto';
import { expect, test } from 'vitest';
import { InvitationNotification } from './invitation-notification';
import { User } from './user';

test('send invitation notification', () => {
  const user = new User({
    id: randomUUID(),
    email: 'johndoe@gmail.com',
    username: 'JohnDoe',
    password: '123456',
  });

  const notification = new InvitationNotification({
    id: randomUUID(),
    lobbyId: randomUUID(),
    userId: user.id,
  });

  user.notifications?.push(notification);

  expect(user.notifications).toHaveLength(1);
  expect(user.notifications?.[0].status).toEqual('PENDING');
});