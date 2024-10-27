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
import { Turn } from './turn.js';

let card: Card;
let cards: Card[];
let bet: Bet;
let player: Player;
let turn1: Turn;
let turn2: Turn;

test('crate round', () => {
  const round = createRound({
    turns: [turn1, turn2],
    winner: player,
  });

  expect(round).toBeInstanceOf(Round);
  expect(round.id).toBeDefined();
  expect(round.turns).toHaveLength(2);
  expect(round.turns[0]).toBeInstanceOf(Turn);
});

beforeAll(() => {
  card = getCard({});
  cards = [card];

  bet = createBet({
    id: randomUUID(),
    predictedVictories: 1,
  });

  player = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards,
    bet,
  });

  turn1 = createTurn({
    player,
    card,
  });

  turn2 = createTurn({
    player,
    card,
  });
});
