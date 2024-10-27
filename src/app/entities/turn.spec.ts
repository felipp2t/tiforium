import { randomUUID } from 'node:crypto';
import { expect, test } from 'vitest';
import { Bet } from './bet';
import { Card } from './card';
import { Player } from './player';
import { Turn } from './turn';

test('create turn', () => {
  const turn = makeTurn();

  expect(turn).toBeInstanceOf(Turn);
  expect(turn.id).toBeDefined();
  expect(turn.player).toBeInstanceOf(Player);
  expect(turn.player.cards).toContainEqual(turn.card);
});

const makeCards = (): Card[] => {
  return [
    new Card({
      id: 'c6f72f1d-ef12-4d84-9e52-2b8321f8b10e',
      value: '1',
      suit: 'SPADES',
    }),
    new Card({
      id: '3d7c7b3b-6b5f-4b2e-905e-02b3fc867fb7',
      value: 'JACK',
      suit: 'HEARTS',
    }),

    new Card({
      id: 'a2f50b36-6c85-4e37-a53c-2e9633c2f8da',
      value: '7',
      suit: 'DIAMONDS',
    }),

    new Card({
      id: 'b4b1847a-c1f3-4d83-8325-7d8f4dbe9086',
      value: '6',
      suit: 'HEARTS',
    }),
  ];
};

const makePlayer = (): Player => {
  return new Player({
    id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
    userId: randomUUID(),
    bet: new Bet({
      id: randomUUID(),
      playerId: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
      predictedVictories: 2,
    }),
    cards: makeCards(),
    status: 'ACTIVE',
    turnWins: 0,
  });
};

const makeTurn = (): Turn => {
  return new Turn({
    id: randomUUID(),
    player: makePlayer(),
    card: new Card({
      id: 'c6f72f1d-ef12-4d84-9e52-2b8321f8b10e',
      value: '1',
      suit: 'SPADES',
    }),
  });
};
