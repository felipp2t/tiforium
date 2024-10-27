import { beforeAll, expect, test } from 'vitest';
import { getCard } from '../factories/card-factory.js';
import { createPile } from '../factories/pile-factory.js';
import type { Card } from './card.js';

let card1: Card;
let card2: Card;
let card3: Card;
let card4: Card;

test('creta a pile', () => {
  const pile = createPile({
    cardsPlayed: [],
  });

  expect(pile.id).toBeDefined();
  expect(pile.cardsPlayed).toEqual([]);
});

test('it should cancel cards of the same value', () => {
  const pile = createPile({
    cardsPlayed: [
      {
        playerId: 'c6f72f1d-ef12-4d84-9e52-2b8321f8b10e',
        card: card1,
      },
      {
        playerId: '3d7c7b3b-6b5f-4b2e-905e-02b3fc867fb7',
        card: card2,
      },
      {
        playerId: 'a2f50b36-6c85-4e37-a53c-2e9633c2f8da',
        card: card3,
      },
      {
        playerId: 'b4b1847a-c1f3-4d83-8325-7d8f4dbe9086',
        card: card4,
      },
    ],
  });

  expect(pile.cardsPlayed).toEqual([
    {
      playerId: '3d7c7b3b-6b5f-4b2e-905e-02b3fc867fb7',
      card: card2,
    },
    {
      playerId: 'a2f50b36-6c85-4e37-a53c-2e9633c2f8da',
      card: card3,
    },
  ]);
});

beforeAll(() => {
  card1 = getCard({ value: '1', suit: 'SPADES' });
  card2 = getCard({ value: 'JACK', suit: 'HEARTS' });
  card3 = getCard({ value: '7', suit: 'DIAMONDS' });
  card4 = getCard({ value: '1', suit: 'HEARTS' });
});
