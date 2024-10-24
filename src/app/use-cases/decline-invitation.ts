import type { UUID } from 'node:crypto';
import type { NotificationRepository } from '../respositories/notification-repository';

export class DeclineInvitation {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(notificationId: UUID): Promise<void> {
    await this.notificationRepository.declineInvitation(notificationId);
  }
}
