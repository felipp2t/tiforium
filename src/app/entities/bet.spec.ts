import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { getCard } from '../factories/card-factory.js';
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
  card1 = getCard({});

  card2 = getCard({});

  card3 = getCard({});

  card4 = getCard({});

  cards = [card1, card2, card3, card4];
});
