import type { UUID } from 'node:crypto';

type NotificationStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED';

interface NotificationProps {
  readonly id: UUID;
  lobbyId: UUID;
  userId: UUID;
  status?: NotificationStatus;
}

export class Notification {
  private props: NotificationProps;
  private createdAt: Date;

  constructor(props: NotificationProps) {
    this.props = {
      ...props,
      status: props.status ?? 'PENDING',
    };

    this.createdAt = new Date();
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

  get status() {
    return this.props.status;
  }

  updateStatus(newStatus: NotificationStatus) {
    if (this.props.status !== 'PENDING') {
      throw new Error('Notification already processed');
    }
    this.props.status = newStatus;
  }
}
