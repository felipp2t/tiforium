import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { createBet } from '../factories/bet-factory.js';
import { getCard } from '../factories/card-factory.js';
import { createPlayer } from '../factories/player-factory.js';
import { createTurn } from '../factories/turn-factory.js';
import type { Bet } from './bet.js';
import type { Card } from './card.js';
import type { Player } from './player.js';
import { Turn } from './turn.js';

let card: Card;
let cards: Card[];
let bet: Bet;
let player: Player;

test('create turn', () => {
  const turn = createTurn({
    playedCard: {
      playerId: player.id,
      card,
    },
  });

  expect(turn).toBeInstanceOf(Turn);
  expect(turn.id).toBeDefined();
  expect(turn.playedCard.playerId).toBe(
    '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
  );
  expect(turn.playedCard.card.value).toBe('2');
  expect(turn.playedCard.card.suit).toBe('HEARTS');
});

beforeAll(() => {
  card = getCard({ value: '2', suit: 'HEARTS' });
  cards = [card];

  bet = createBet({
    id: randomUUID(),
    predictedVictories: 1,
  });

  player = createPlayer({
    id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
    turnWins: 0,
    status: 'ACTIVE',
    cards,
    bet,
  });
});
