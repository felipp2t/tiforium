import type { UUID } from 'node:crypto';
import { NOTIFICATION_EXPIRES_AT_IN_MS } from '../config/notification-expires-at-in-seconds';

type NotificationStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED';

interface InvitationNotificationProps {
  id: UUID;
  lobbyId: UUID;
  userId: UUID;
  status?: NotificationStatus;

  updatedAt?: Date;
}

export class InvitationNotification {
  private props: InvitationNotificationProps;
  private expiresAtInMs: number;
  private createdAt: Date;

  constructor(props: InvitationNotificationProps) {
    this.props = {
      ...props,
      status: props.status ?? 'PENDING',
    };

    this.createdAt = new Date();
    this.expiresAtInMs = NOTIFICATION_EXPIRES_AT_IN_MS;
  }

  get id() {
    return this.props.id;
  }

  get lobbyId() {
    return this.props.lobbyId;
  }

  get userId() {
    return this.props.userId;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get status() {
    return this.props.status;
  }

  isExpired(): boolean {
    const currentTime = new Date().getTime();
    const createdAtTime = this.createdAt.getTime();
    return currentTime > createdAtTime + this.expiresAtInMs;
  }
}
