import type { UUID } from 'node:crypto';
import type { Card } from './card.js';

interface Cards {
  playerId: UUID;
  card: Card;
}

interface PileProps {
  id: UUID;
  cardsPlayed: Cards[] | null;
}

export class Pile {
  private props: PileProps;

  constructor(props: PileProps) {
    this.props = props;

    this.cancelCardsOfTheSameValue(props.cardsPlayed);
  }

  get id(): UUID {
    return this.props.id;
  }

  get cardsPlayed(): Cards[] | null {
    return this.props.cardsPlayed;
  }

  private cancelCardsOfTheSameValue(cardsPlayed: Cards[] | null) {
    if (!cardsPlayed) return;

    this.props.cardsPlayed = cardsPlayed.filter(
      ({ card }) => card.value !== cardsPlayed[cardsPlayed.length - 1].card.value,
    );
  }
}

// [1, 3, 5, 1]
