import { type UUID, randomUUID } from 'node:crypto';
import { MAX_PLAYERS_LIMIT, MIN_PLAYERS_LIMIT } from '../config/players-limit';
import type { User } from './user';

interface LobbyProps {
  id: UUID;
  maxPlayers: number;
  players: Pick<User, 'id'>[];
  owner: User;
}

export class Lobby {
  private props: LobbyProps;

  constructor(props: LobbyProps) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
    };

    this.validateOwner(props.owner);
    this.validateMaxPlayerLimit(props.maxPlayers);
    this.validateMinPlayerLimit(props.maxPlayers);
    this.validateMaxPlayers(props.maxPlayers, props.players);
  }

  get id() {
    return this.props.id;
  }

  get maxPlayers() {
    return this.props.maxPlayers;
  }

  get players() {
    return this.props.players;
  }

  get owner() {
    return this.props.owner;
  }

  private validateMaxPlayers(maxPlayers: number, players: Pick<User, 'id'>[]) {
    if (players.length + 1 > maxPlayers) {
      throw new Error(
        'Cannot create a lobby with more players than max players',
      );
    }
  }

  private validateMaxPlayerLimit(maxPlayers: number) {
    if (maxPlayers > MAX_PLAYERS_LIMIT) {
      throw new Error('Max players limit exceeded');
    }
  }

  private validateMinPlayerLimit(maxPlayers: number) {
    if (maxPlayers < MIN_PLAYERS_LIMIT) {
      throw new Error('Min players limit insufficient');
    }
  }

  private validateOwner(owner: User) {
    if (!owner.email || !owner.username || !owner.password) {
      throw new Error('Cannot create a lobby without an owner');
    }
  }
}
