import { randomUUID } from 'node:crypto';
import { beforeAll, test } from 'vitest';
import { Bet } from './bet';
import { Card } from './card';
import { Player } from './player';
import { User } from './user';

let card1: Card;
let card2: Card;
let card3: Card;
let card4: Card;
let cards: Card[];

beforeAll(() => {
  card1 = new Card({
    id: randomUUID(),
    suit: 'DIAMONDS',
    value: '2',
  });

  card2 = new Card({
    id: randomUUID(),
    suit: 'HEARTS',
    value: '10',
  });

  card3 = new Card({
    id: randomUUID(),
    suit: 'SPADES',
    value: 'KING',
  });

  card4 = new Card({
    id: randomUUID(),
    suit: 'CLUBS',
    value: 'JACK',
  });

  cards = [card1, card2, card3, card4].sort(() => Math.random() - 0.5);
});

beforeAll(() => {});

test('create bet', () => {
  const user = new User({
    id: randomUUID(),
    email: 'johndoe@gmail.com',
    password: '123456',
    username: 'johndoe',
  });

  const player = new Player({
    id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
    userId: user.id,
    cards,
    status: 'ACTIVE',
    turnWins: 0,
    bet: new Bet({
      id: randomUUID(),
      playerId: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
      predictedVictories: 2,
    }),
  });
});
