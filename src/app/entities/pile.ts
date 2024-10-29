import type { UUID } from "node:crypto";
import type { Card } from "./card.js";

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

    this.cancelCardsOfTheSameValue(this.props.cardsPlayed);
  }

  get id(): UUID {
    return this.props.id;
  }

  get cardsPlayed(): PlayedCard[] | null {
    return this.props.cardsPlayed;
  }

  cancelCardsOfTheSameValue(cardsPlayed: PlayedCard[] | null) {
    if (!cardsPlayed) return;

    const valueCount = new Map<string, number>();

    for (const { card } of cardsPlayed) {
      valueCount.set(card.value, (valueCount.get(card.value) || 0) + 1);
    }

    this.props.cardsPlayed = cardsPlayed.filter(({ card }) => {
      return valueCount.get(card.value) === 1;
    });
  }
}
