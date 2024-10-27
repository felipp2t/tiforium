import type { UUID } from 'node:crypto';
import type { Card } from './card.js';

interface PlayedCard {
  playerId: UUID;
  card: Card;
}

interface TurnProps {
  id: UUID;
  playedCard: PlayedCard;
}

export class Turn {
  private props: TurnProps;

  constructor(props: TurnProps) {
    this.props = props;
  }

  get id(): string {
    return this.props.id;
  }

  get playedCard(): PlayedCard {
    return this.props.playedCard;
  }
}
