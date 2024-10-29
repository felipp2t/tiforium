import type { UUID } from 'node:crypto';
import type { NotificationRepository } from '../respositories/notification-repository.js';

interface DeclineInvitationProps {
  notificationId: UUID;
}

export class DeclineInvitation {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute({ notificationId }: DeclineInvitationProps): Promise<void> {
    await this.notificationRepository.declineInvitation({ notificationId });
  }
}
