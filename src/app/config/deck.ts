import type { Suit, Value } from './card';

interface Deck {
  value: Value;
  suit: Suit;
}

export const DECK: Deck[] = [
  { value: '1', suit: 'HEARTS' },
  { value: '2', suit: 'HEARTS' },
  { value: '3', suit: 'HEARTS' },
  { value: '4', suit: 'HEARTS' },
  { value: '5', suit: 'HEARTS' },
  { value: '6', suit: 'HEARTS' },
  { value: '7', suit: 'HEARTS' },
  { value: '10', suit: 'HEARTS' },
  { value: 'JACK', suit: 'HEARTS' },
  { value: 'QUEEN', suit: 'HEARTS' },
  { value: 'KING', suit: 'HEARTS' },

  { value: '1', suit: 'DIAMONDS' },
  { value: '2', suit: 'DIAMONDS' },
  { value: '3', suit: 'DIAMONDS' },
  { value: '4', suit: 'DIAMONDS' },
  { value: '5', suit: 'DIAMONDS' },
  { value: '6', suit: 'DIAMONDS' },
  { value: '7', suit: 'DIAMONDS' },
  { value: '10', suit: 'DIAMONDS' },
  { value: 'JACK', suit: 'DIAMONDS' },
  { value: 'QUEEN', suit: 'DIAMONDS' },
  { value: 'KING', suit: 'DIAMONDS' },

  { value: '1', suit: 'CLUBS' },
  { value: '2', suit: 'CLUBS' },
  { value: '3', suit: 'CLUBS' },
  { value: '4', suit: 'CLUBS' },
  { value: '5', suit: 'CLUBS' },
  { value: '6', suit: 'CLUBS' },
  { value: '7', suit: 'CLUBS' },
  { value: '10', suit: 'CLUBS' },
  { value: 'JACK', suit: 'CLUBS' },
  { value: 'QUEEN', suit: 'CLUBS' },
  { value: 'KING', suit: 'CLUBS' },

  { value: '1', suit: 'SPADES' },
  { value: '2', suit: 'SPADES' },
  { value: '3', suit: 'SPADES' },
  { value: '4', suit: 'SPADES' },
  { value: '5', suit: 'SPADES' },
  { value: '6', suit: 'SPADES' },
  { value: '7', suit: 'SPADES' },
  { value: '10', suit: 'SPADES' },
  { value: 'JACK', suit: 'SPADES' },
  { value: 'QUEEN', suit: 'SPADES' },
  { value: 'KING', suit: 'SPADES' },
];
