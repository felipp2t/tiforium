import { type UUID, randomUUID } from 'node:crypto';
import { Notification } from '../entities/notification.js';

type NotificationStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED';

interface NotificationProps {
  readonly id?: UUID;
  lobbyId: UUID;
  userId: UUID;
  status?: NotificationStatus;
}

export const createNotification = (props: NotificationProps): Notification => {
  return new Notification({
    id: props.id ?? randomUUID(),
    lobbyId: props.lobbyId,
    userId: props.userId,
    status: props.status,
  });
};
