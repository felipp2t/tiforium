import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { Card } from './card';
import { Pile } from './pile';

let card1: Card;
let card2: Card;
let card3: Card;
let card4: Card;
let cards: Card[];

beforeAll(() => {
  card1 = new Card({
    id: randomUUID(),
    value: '1',
    suit: 'SPADES',
  });

  card2 = new Card({
    id: randomUUID(),
    value: '2',
    suit: 'HEARTS',
  });

  card3 = new Card({
    id: randomUUID(),
    value: 'QUEEN',
    suit: 'CLUBS',
  });

  card4 = new Card({
    id: randomUUID(),
    value: 'KING',
    suit: 'DIAMONDS',
  });

  cards = [card1, card2, card3, card4].sort(() => {
    return Math.random() - 0.5;
  });
});

test('creta a pile', () => {
  const pile = new Pile({
    id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
    cardsPlayed: [],
  });

  expect(pile.id).toBeDefined();
  expect(pile.cardsPlayed).toEqual([]);
});
