import type { UUID } from 'node:crypto';
import type { NotificationRepository } from '../respositories/notification-repository.js';

interface AcceptInvitationProps {
  notificationId: UUID;
}
export class AcceptInvitation {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute({ notificationId }: AcceptInvitationProps): Promise<void> {
    await this.notificationRepository.acceptInvitation({ notificationId });
  }
}
