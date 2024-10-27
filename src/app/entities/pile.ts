import type { UUID } from 'node:crypto';
import type { Card } from './card.js';

interface PlayedCard {
  playerId: UUID;
  card: Card;
}

interface PileProps {
  id: UUID;
  cardsPlayed: PlayedCard[] | null;
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

  get cardsPlayed(): PlayedCard[] | null {
    return this.props.cardsPlayed;
  }

  private cancelCardsOfTheSameValue(cardsPlayed: PlayedCard[] | null) {
    if (!cardsPlayed) return;

    this.props.cardsPlayed = cardsPlayed.filter(
      ({ card }) => card.value !== cardsPlayed[cardsPlayed.length - 1].card.value,
    );
  }
}
