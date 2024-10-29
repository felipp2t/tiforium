import { randomUUID } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { createNotification } from '../factories/notification-factory.js';
import { InMemoryNotificationRepository } from '../respositories/in-memory/in-memory-notification-repository.js';
import { DeclineInvitation } from './decline-invitation.js';

describe('DeclineInvitation', () => {
  it('should be able to decline an invitation', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const declineInvitation = new DeclineInvitation(notificationRepository);

    const sut = createNotification({
      id: randomUUID(),
      lobbyId: randomUUID(),
      userId: randomUUID(),
    });

    await notificationRepository.sendNotification({ notification: sut });
    await declineInvitation.execute({ notificationId: sut.id });

    const updatedNotification = await notificationRepository.getNotifications({
      userId: sut.userId,
    });

    expect(updatedNotification[0].status).toBe('DECLINED');
  });
});
