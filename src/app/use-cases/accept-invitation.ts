import type { UUID } from 'node:crypto';
import type { NotificationRepository } from '../respositories/notification-repository';

export class AcceptInvitation {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(notificationId: UUID): Promise<void> {
    await this.notificationRepository.acceptInvitation(notificationId);
  }
}
