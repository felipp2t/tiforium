import type { Suit, Value } from '../config/card.js';
import { DECK } from '../config/deck.js';
import { Card } from '../entities/card.js';

interface CardProps {
  value: Value;
  suit: Suit;
}

const createInstanceOfCard = (props: CardProps): Card => {
  return new Card({
    suit: props.suit,
    value: props.value,
  });
};

type CardFactory =
  | { value: Value; suit: Suit }
  | { value?: never; suit?: never };

export const getCard = (props: CardFactory) => {
  if (props.value && props.suit) {
    const card = DECK.find(
      card => card.value === props.value && card.suit === props.suit,
    );

    if (card) {
      return createInstanceOfCard(card);
    }
  }

  const index = Math.floor(Math.random() * DECK.length);
  return createInstanceOfCard(DECK[index]);
};
