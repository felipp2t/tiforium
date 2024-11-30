import type { Suits } from './suit-of-card.js';
import type { Values } from './values.js';

interface Deck {
  value: Values;
  suit: Suits ;
  strength: number;
}

export const DECK: Deck[] = [
  { value: '1', suit: 'HEARTS', strength: 8 },
  { value: '2', suit: 'HEARTS', strength: 9 },
  { value: '3', suit: 'HEARTS', strength: 10 },
  { value: '4', suit: 'HEARTS', strength: 0 },
  { value: '5', suit: 'HEARTS', strength: 1 },
  { value: '6', suit: 'HEARTS', strength: 2 },
  { value: '7', suit: 'HEARTS', strength: 3 },
  { value: '10', suit: 'HEARTS', strength: 4 },
  { value: 'JACK', suit: 'HEARTS', strength: 5 },
  { value: 'QUEEN', suit: 'HEARTS', strength: 6 },
  { value: 'KING', suit: 'HEARTS', strength: 7 },

  { value: '1', suit: 'DIAMONDS', strength: 8 },
  { value: '2', suit: 'DIAMONDS', strength: 9 },
  { value: '3', suit: 'DIAMONDS', strength: 10 },
  { value: '4', suit: 'DIAMONDS', strength: 0 },
  { value: '5', suit: 'DIAMONDS', strength: 1 },
  { value: '6', suit: 'DIAMONDS', strength: 2 },
  { value: '7', suit: 'DIAMONDS', strength: 3 },
  { value: '10', suit: 'DIAMONDS', strength: 4 },
  { value: 'JACK', suit: 'DIAMONDS', strength: 5 },
  { value: 'QUEEN', suit: 'DIAMONDS', strength: 6 },
  { value: 'KING', suit: 'DIAMONDS', strength: 7 },

  { value: '1', suit: 'CLUBS', strength: 8 },
  { value: '2', suit: 'CLUBS', strength: 9 },
  { value: '3', suit: 'CLUBS', strength: 10 },
  { value: '4', suit: 'CLUBS', strength: 0 },
  { value: '5', suit: 'CLUBS', strength: 1 },
  { value: '6', suit: 'CLUBS', strength: 2 },
  { value: '7', suit: 'CLUBS', strength: 3 },
  { value: '10', suit: 'CLUBS', strength: 4 },
  { value: 'JACK', suit: 'CLUBS', strength: 5 },
  { value: 'QUEEN', suit: 'CLUBS', strength: 6 },
  { value: 'KING', suit: 'CLUBS', strength: 7 },

  { value: '1', suit: 'SPADES', strength: 8 },
  { value: '2', suit: 'SPADES', strength: 9 },
  { value: '3', suit: 'SPADES', strength: 10 },
  { value: '4', suit: 'SPADES', strength: 0 },
  { value: '5', suit: 'SPADES', strength: 1 },
  { value: '6', suit: 'SPADES', strength: 2 },
  { value: '7', suit: 'SPADES', strength: 3 },
  { value: '10', suit: 'SPADES', strength: 4 },
  { value: 'JACK', suit: 'SPADES', strength: 5 },
  { value: 'QUEEN', suit: 'SPADES', strength: 6 },
  { value: 'KING', suit: 'SPADES', strength: 7 },
];
