import { randomUUID } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { createNotification } from '../factories/notification-factory.js';
import { InMemoryNotificationRepository } from '../respositories/in-memory/in-memory-notification-repository.js';
import { AcceptInvitation } from './accept-invitation.js';

describe('AcceptInvitation', () => {
  it('should be able to accept an invitation', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const acceptInvitation = new AcceptInvitation(notificationRepository);

    const sut = createNotification({
      id: randomUUID(),
      lobbyId: randomUUID(),
      userId: randomUUID(),
    });

    await notificationRepository.sendNotification({ notification: sut });
    await acceptInvitation.execute({ notificationId: sut.id });

    const updatedNotification = await notificationRepository.getNotifications({
      userId: sut.userId,
    });

    expect(updatedNotification[0].status).toBe('ACCEPTED');
  });
});
