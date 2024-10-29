import type { UUID } from 'node:crypto';
import type { Notification } from '../entities/notification.js';

interface sendNotificationProps {
  notification: Notification;
}

export interface NotificationRepository {
  sendNotification({
    notification,
  }: sendNotificationProps): Promise<void>;
  getNotifications(userId: UUID): Promise<Notification[]>;
  acceptInvitation(notificationId: UUID): Promise<void>;
  declineInvitation(notificationId: UUID): Promise<void>;
}
