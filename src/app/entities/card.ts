import { DECK } from '../config/cards/deck.js';
import type { Suit, Value } from '../config/cards/suit-of-card.js';

interface CardProps {
  value: Value;
  suit: Suit;
}

export class Card {
  private props: CardProps;
  private cardStrength: number;

  constructor(props: CardProps) {
    this.props = props;
    this.cardStrength = this.getCardStrength(this.props);
  }

  get value(): Value {
    return this.props.value;
  }

  get suit(): Suit {
    return this.props.suit;
  }

  get strength(): number {
    return this.cardStrength;
  }

  private getCardStrength(card: CardProps): number {
    const strength = DECK.filter(
      ({ value, suit }) => card.value === value && card.suit === suit,
    )[0].strength;

    return strength;
  }
}
