import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { Bet } from './bet';
import { Card } from './card';
import { Player } from './player';

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

test('create player', () => {
  const player = new Player({
    id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
    userId: randomUUID(),
    cards,
    bet: new Bet({
      id: randomUUID(),
      playerId: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
      predictedVictories: 2,
    }),
    turnWins: 0,
    status: 'ACTIVE',
  });

  expect(player.id).toBeDefined();
  expect(player.userId).toBeDefined();
  expect(player.cards).toEqual(expect.arrayContaining(cards));
  expect(player.bet.predictedVictories).toBe(2);
  expect(player.turnWins).toBe(0);
  expect(player.status).toBe('ACTIVE');
});

test('cannot create player with bet greater than the number of cards', () => {
  expect(() => {
    new Player({
      id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
      userId: randomUUID(),
      cards,
      bet: new Bet({
        id: randomUUID(),
        playerId: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
        predictedVictories: 5,
      }),
      turnWins: 0,
      status: 'ACTIVE',
    });
  }).toThrowError('Bet must be lower than the number of cards');
});

test('cannot create player with bet less than 0', () => {
  expect(() => {
    new Player({
      id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
      userId: randomUUID(),
      cards,
      bet: new Bet({
        id: randomUUID(),
        playerId: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
        predictedVictories: -1,
      }),
      turnWins: 0,
      status: 'ACTIVE',
    });
  }).toThrowError('Bet must be greater than 0');
});

test('cannot create player with eliminated status with cards in hand', () => {
  expect(() => {
    new Player({
      id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
      userId: randomUUID(),
      cards,
      bet: new Bet({
        id: randomUUID(),
        playerId: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
        predictedVictories: 2,
      }),
      turnWins: 0,
      status: 'ELIMINATED',
    });
  }).toThrowError(
    'it not possible to have cards in hand with status ELIMINATED',
  );
});
