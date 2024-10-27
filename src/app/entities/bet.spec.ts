import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { createCard } from '../factories/card-factory.js';
import { createPlayer } from '../factories/player-factory.js';
import { Bet } from './bet.js';
import type { Card } from './card.js';

let card1: Card;
let card2: Card;
let card3: Card;
let card4: Card;
let cards: Card[];

test('create bet', () => {
  const player = createPlayer({
    userId: randomUUID(),
    status: 'ACTIVE',
    turnWins: 0,
    cards,
    bet: new Bet({
      id: randomUUID(),
      predictedVictories: 2,
    }),
  });

  expect(player.bet.id).toBeDefined();
  expect(player.bet.predictedVictories).toBe(2);
});

beforeAll(() => {
  card1 = createCard({
    id: randomUUID(),
    suit: 'DIAMONDS',
    value: '2',
  });

  card2 = createCard({
    id: randomUUID(),
    suit: 'HEARTS',
    value: '10',
  });

  card3 = createCard({
    id: randomUUID(),
    suit: 'SPADES',
    value: 'KING',
  });

  card4 = createCard({
    id: randomUUID(),
    suit: 'CLUBS',
    value: 'JACK',
  });

  cards = [card1, card2, card3, card4];
});
