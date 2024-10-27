import { type UUID, randomUUID } from 'node:crypto';
import type { Card } from '../entities/card.js';
import { Pile } from '../entities/pile.js';

interface Cards {
  playerId: UUID;
  card: Card;
}

interface PileProps {
  id?: UUID;
  cardsPlayed: Cards[] | null;
}

export const createPile = (props: PileProps): Pile => {
  return new Pile({
    id: props.id ?? randomUUID(),
    cardsPlayed: props.cardsPlayed,
  });
};
