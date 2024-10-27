import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { createBet } from '../factories/bet-factory.js';
import { getCard } from '../factories/card-factory.js';
import { createPlayer } from '../factories/player-factory.js';
import { createTurn } from '../factories/turn-factory.js';
import type { Bet } from './bet.js';
import type { Card } from './card.js';
import { Player } from './player.js';
import { Turn } from './turn.js';

let card: Card;
let cards: Card[];
let bet: Bet;
let player: Player;

test('create turn', () => {
  const turn = createTurn({
    player,
    card,
  });

  expect(turn).toBeInstanceOf(Turn);
  expect(turn.id).toBeDefined();
  expect(turn.player).toBeInstanceOf(Player);
  expect(turn.player.cards).toContainEqual(turn.card);
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
});
