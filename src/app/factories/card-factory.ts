import { type UUID, randomUUID } from 'node:crypto';
import type { Suit, Value } from '../config/card.js';
import { Card } from '../entities/card.js';

interface CardProps {
  id?: UUID;
  value: Value;
  suit: Suit;
}

export const createCard = (props: CardProps): Card => {
  return new Card({
    id: props.id ?? randomUUID(),
    suit: props.suit,
    value: props.value,
  });
}