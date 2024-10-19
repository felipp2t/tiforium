import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
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
  const sut = new Player({
    id: randomUUID(),
    userId: randomUUID(),
    cards,
    bet: 2,
    turnWins: 0,
    status: 'ACTIVE',
  });

  expect(sut.id).toBeDefined();
  expect(sut.userId).toBeDefined();
  expect(sut.cards).toEqual(expect.arrayContaining(cards));
  expect(sut.bet).toBe(2);
  expect(sut.turnWins).toBe(0);
  expect(sut.status).toBe('ACTIVE');
});

test('cannot create player with bet greater than the number of cards', () => {
  expect(() => {
    new Player({
      id: randomUUID(),
      userId: randomUUID(),
      cards,
      bet: 5,
      turnWins: 0,
      status: 'ACTIVE',
    });
  }).toThrowError('Bet must be lower than the number of cards');
});

test('cannot create player with bet less than 0', () => {
  expect(() => {
    new Player({
      id: randomUUID(),
      userId: randomUUID(),
      cards,
      bet: -1,
      turnWins: 0,
      status: 'ACTIVE',
    });
  }).toThrowError('Bet must be greater than 0');
});

test('cannot create player with eliminated status with cards in hand', () => {
  expect(() => {
    new Player({
      id: randomUUID(),
      userId: randomUUID(),
      cards,
      bet: 2,
      turnWins: 0,
      status: 'ELIMINATED',
    });
  }).toThrowError(
    'it not possible to have cards in hand with status ELIMINATED',
  );
});
