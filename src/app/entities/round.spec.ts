import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { createBet } from '../factories/bet-factory.js';
import { getCard } from '../factories/card-factory.js';
import { createPile } from '../factories/pile-factory.js';
import { createPlayer } from '../factories/player-factory.js';
import { createRound } from '../factories/round-factory.js';
import { createTurn } from '../factories/turn-factory.js';
import type { Bet } from './bet.js';
import type { Card } from './card.js';
import type { Pile } from './pile.js';
import type { Player } from './player.js';
import { Round } from './round.js';
import type { Turn } from './turn.js';

let pile: Pile;
let cards1: Card[];
let cards2: Card[];

let bet: Bet;
let player1: Player;
let player2: Player;

let turn1: Turn;
let turn2: Turn;

test('create round', () => {
  const round = createRound({
    turns: [turn1, turn2],
    pile,
  });

  expect(round).toBeInstanceOf(Round);
  expect(round.id).toBeDefined();
  expect(round.turns).toHaveLength(2);
});

beforeAll(() => {
  pile = createPile({
    cardsPlayed: [],
  });

  cards1 = [getCard({ value: '1', suit: 'HEARTS' })];
  cards2 = [getCard({ value: '2', suit: 'CLUBS' })];

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
});
