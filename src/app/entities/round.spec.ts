import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { createBet } from '../factories/bet-factory.js';
import { getCard } from '../factories/card-factory.js';
import { createPlayer } from '../factories/player-factory.js';
import { createRound } from '../factories/round-factory.js';
import { createTurn } from '../factories/turn-factory.js';
import type { Bet } from './bet.js';
import type { Card } from './card.js';
import type { Player } from './player.js';
import { Round } from './round.js';
import type { Turn } from './turn.js';

let cards1: Card[];
let cards2: Card[];
let cards3: Card[];
let cards4: Card[];
let bet: Bet;
let player1: Player;
let player2: Player;
let player3: Player;
let player4: Player;
let turn1: Turn;
let turn2: Turn;
let turn3: Turn;
let turn4: Turn;

test('crate round', () => {
  const round = createRound({
    turns: [turn1, turn2, turn3, turn4],
  });

  expect(round).toBeInstanceOf(Round);
  expect(round.id).toBeDefined();
  expect(round.turns).toHaveLength(4);
});

test('round winner', () => {
  const round = createRound({
    turns: [turn1, turn2, turn3, turn4],
  });

  expect(round.winner).toBe(player3.id);
});

beforeAll(() => {
  cards1 = [getCard({ value: '1', suit: 'HEARTS' })];
  cards2 = [getCard({ value: '2', suit: 'CLUBS' })];
  cards3 = [getCard({ value: '3', suit: 'SPADES' })];
  cards4 = [getCard({ value: '4', suit: 'DIAMONDS' })];

  bet = createBet({
    id: randomUUID(),
    predictedVictories: 1,
  });

  player1 = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards: cards1,
    bet,
  });

  player2 = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards: cards2,
    bet,
  });

  player3 = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards: cards3,
    bet,
  });

  player4 = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards: cards4,
    bet,
  });

  turn1 = createTurn({
    playedCard: {
      playerId: player1.id,
      card: player1.cards[0],
    },
  });

  turn2 = createTurn({
    playedCard: {
      playerId: player2.id,
      card: player2.cards[0],
    },
  });

  turn3 = createTurn({
    playedCard: {
      playerId: player3.id,
      card: player3.cards[0],
    },
  });

  turn4 = createTurn({
    playedCard: {
      playerId: player4.id,
      card: player4.cards[0],
    },
  });
});
