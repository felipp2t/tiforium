import type { UUID } from 'node:crypto';
import type { Notification } from '../entities/notification.js';

interface SendNotification {
  notification: Notification;
}

interface GetNotifications {
  userId: UUID;
}

interface AcceptInvitation {
  notificationId: UUID;
}

interface DeclineInvitation {
  notificationId: UUID;
}

export interface NotificationRepository {
  sendNotification({ notification }: SendNotification): Promise<void>;
  getNotifications({ userId }: GetNotifications): Promise<Notification[]>;
  acceptInvitation({ notificationId }: AcceptInvitation): Promise<void>;
  declineInvitation({ notificationId }: DeclineInvitation): Promise<void>;
}
