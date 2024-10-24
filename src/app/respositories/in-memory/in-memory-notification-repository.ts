import type { UUID } from 'node:crypto';
import type { Notification } from 'src/app/entities/notification';
import type { NotificationRepository } from '../notification-repository';

interface sendNotificationProps {
  notification: Notification;
}

export class InMemoryNotificationRepository implements NotificationRepository {
  private notifications: Notification[] = [];

  async sendNotification({
    notification,
  }: sendNotificationProps): Promise<void> {
    this.notifications.push(notification);
  }

  async getNotifications(userId: UUID): Promise<Notification[]> {
    return this.notifications.filter(
      notification => notification.userId === userId,
    );
  }

  async acceptInvitation(notificationId: UUID): Promise<void> {
    const notification = this.notifications.find(n => n.id === notificationId);

    if (!notification) {
      throw new Error('Notification not found');
    }

    notification.updateStatus('ACCEPTED');
  }

  async declineInvitation(notificationId: UUID): Promise<void> {
    const notification = this.notifications.find(n => n.id === notificationId);

    if (!notification) {
      throw new Error('Notification not found');
    }

    notification.updateStatus('DECLINED');
  }
}
