import { type UUID, randomUUID } from 'node:crypto';

interface UserProps {
  id?: UUID;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  props: UserProps;

  constructor(props: UserProps) {
    
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
      createdAt: props.createdAt ?? new Date(),
    };
    this.validateEmail(props.email);
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
}
