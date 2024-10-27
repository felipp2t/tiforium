import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { createBet } from '../factories/bet-factory.js';
import { getCard } from '../factories/card-factory.js';
import { createPlayer } from '../factories/player-factory.js';
import type { Bet } from './bet.js';
import type { Card } from './card.js';

let card1: Card;
let card2: Card;
let card3: Card;
let card4: Card;
let cards: Card[];
let bet: Bet;

test('create player', () => {
  const player = createPlayer({
    id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
    userId: randomUUID(),
    turnWins: 0,
    status: 'ACTIVE',
    cards,
    bet,
  });

  expect(player.id).toBeDefined();
  expect(player.userId).toBeDefined();
  expect(player.cards).toEqual(expect.arrayContaining(cards));
  expect(player.bet.predictedVictories).toBe(2);
  expect(player.turnWins).toBe(0);
  expect(player.status).toBe('ACTIVE');
});

test('cannot create player with bet greater than the number of cards', () => {
  const bet = createBet({
    id: randomUUID(),
    predictedVictories: 5,
  });

  expect(() => {
    createPlayer({
      turnWins: 0,
      status: 'ACTIVE',
      cards,
      bet,
    });
  }).toThrowError('Bet must be lower than the number of cards');
});

test('cannot create player with bet less than 0', () => {
  const bet = createBet({
    id: randomUUID(),
    predictedVictories: -1,
  });

  expect(() => {
    createPlayer({
      turnWins: 0,
      status: 'ACTIVE',
      cards,
      bet,
    });
  }).toThrowError('Bet must be greater than 0');
});

test('cannot create player with eliminated status with cards in hand', () => {
  const bet = createBet({
    id: randomUUID(),
    predictedVictories: 2,
  });

  expect(() => {
    createPlayer({
      cards,
      bet,
      status: 'ELIMINATED',
      turnWins: 0,
    });
  }).toThrowError(
    'it not possible to have cards in hand with status ELIMINATED',
  );
});

beforeAll(() => {
  card1 = getCard({});
  card2 = getCard({});
  card3 = getCard({});
  card4 = getCard({});

  cards = [card1, card2, card3, card4];

  bet = createBet({
    id: randomUUID(),
    predictedVictories: 2,
  });
});
