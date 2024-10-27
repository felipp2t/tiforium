import type { UUID } from 'node:crypto';
import type { Suit, Value } from '../config/card.js';

interface CardProps {
  value: Value;
  suit: Suit;
}

export class Card {
  private props: CardProps;

  constructor(props: CardProps) {
    this.props = props;
  }

  get value(): Value {
    return this.props.value;
  }

  get suit(): Suit {
    return this.props.suit;
  }
}
