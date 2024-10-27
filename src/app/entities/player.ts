import type { UUID } from 'node:crypto';
import type { STATUS } from '../config/player.js';
import type { Bet } from './bet.js';
import type { Card } from './card.js';

interface PlayerProps {
  id: UUID;
  userId: string;
  cards: Card[];
  bet: Bet;
  turnWins: number;
  status: STATUS;
}

export class Player {
  private props: PlayerProps;

  constructor(props: PlayerProps) {
    this.props = props;

    this.validateMaxBetLimit(props.bet.predictedVictories);
    this.validateMinBetLimit(props.bet.predictedVictories);
    this.validateStatus(props.status);
  }

  get id(): string {
    return this.props.id;
  }

  get userId(): string {
    return this.props.userId;
  }

  get cards(): Card[] {
    return this.props.cards;
  }

  get bet(): Bet {
    return this.props.bet;
  }

  get turnWins(): number {
    return this.props.turnWins;
  }

  get status(): STATUS {
    return this.props.status;
  }

  private validateMaxBetLimit(bet: number): void {
    if (bet > this.cards.length) {
      throw new Error('Bet must be lower than the number of cards');
    }
  }

  private validateMinBetLimit(bet: number): void {
    if (bet < 0) {
      throw new Error('Bet must be greater than 0');
    }
  }

  private validateStatus(status: STATUS): void {
    if (status === 'ELIMINATED' && this.cards.length > 0) {
      throw new Error(
        'it not possible to have cards in hand with status ELIMINATED',
      );
    }
  }
}
