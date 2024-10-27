import type { UUID } from 'node:crypto';
import type { Card } from './card';

interface Cards {
  playerId: UUID;
  cards: Card[];
}

interface PileProps {
  id: UUID;
  cardsPlayed: Cards[] | null;
}

export class Pile {
  private props: PileProps;

  constructor(props: PileProps) {
    this.props = props;
  }

  get id(): UUID {
    return this.props.id;
  }

  get cardsPlayed(): Cards[] | null {
    return this.props.cardsPlayed;
  }
}
