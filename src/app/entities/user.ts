import type { UUID } from 'node:crypto';
import type { InvitationNotification } from './invitation-notification';

interface UserProps {
  id: UUID;
  username: string;
  email: string;
  password: string;
  notifications?: InvitationNotification[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = {
      ...props,
      notifications: props.notifications ?? [],
      createdAt: props.createdAt ?? new Date(),
    };
    this.validateEmail(props.email);
    this.validateUsername(props.username.trim());
  }

  get id() {
    return this.props.id;
  }

  get username() {
    return this.props.username;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get notifications() {
    return this.props.notifications ?? [];
  }

  setUpdatedAt() {
    this.props.updatedAt = new Date();
  }

  private validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValidator = emailRegex.test(email);

    if (!emailValidator) {
      throw new Error('Invalid email');
    }
  }

  private validateUsername(username: string) {
    if (!username) {
      throw new Error('Invalid username');
    }
  }
}
