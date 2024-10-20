import type { UUID } from 'node:crypto';
import type { Suit, Value } from '../config/card';

interface CardProps {
  id: UUID;
  value: Value;
  suit: Suit;
}

export class Card {
  private props: CardProps;

  constructor(props: CardProps) {
    this.props = props;
  }

  get id(): string {
    return this.props.id;
  }

  get value(): Value {
    return this.props.value;
  }

  get suit(): Suit {
    return this.props.suit;
  }
}
