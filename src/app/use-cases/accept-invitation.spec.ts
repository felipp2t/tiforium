import { randomUUID } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { Notification } from '../entities/notification';
import { InMemoryNotificationRepository } from '../respositories/in-memory/in-memory-notification-repository';
import { AcceptInvitation } from './accept-invitation';

describe('AcceptInvitation', () => {
  it('should be able to accept an invitation', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const acceptInvitation = new AcceptInvitation(notificationRepository);

    const notification = new Notification({
      id: randomUUID(),
      lobbyId: '262e0c5a-8780-4b54-9852-e5966ab5339a',
      userId: '275f2109-91a1-4e5d-9455-62dc38ea76e4',
    });

    await notificationRepository.sendNotification({ notification });
    await acceptInvitation.execute(notification.id);

    const updatedNotification = await notificationRepository.getNotifications(
      '275f2109-91a1-4e5d-9455-62dc38ea76e4',
    );

    expect(updatedNotification[0].status).toBe('ACCEPTED');
  });
});
