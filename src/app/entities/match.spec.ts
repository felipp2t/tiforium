import { beforeAll, expect, test } from 'vitest';
import { createBet } from '../factories/bet-factory.js';
import { createCard } from '../factories/card-factory.js';
import { createMatch } from '../factories/match-factory.js';
import { createPlayer } from '../factories/player-factory.js';
import { createRound } from '../factories/round-factory.js';
import { createTurn } from '../factories/turn-factory.js';
import type { Card } from './card.js';
import { Match } from './match.js';
import type { Player } from './player.js';
import { Round } from './round.js';
import type { Turn } from './turn.js';

let round1: Round;
let round2: Round;
let round3: Round;
let round4: Round;
let turn1: Turn;
let turn2: Turn;
let turn3: Turn;
let turn4: Turn;
let player1: Player;
let player2: Player;
let player3: Player;
let player4: Player;
let card1: Card;
let card2: Card;
let card3: Card;
let card4: Card;
let cards: Card[];

test('create match', () => {
  const match = createMatch({
    rounds: [round1, round2, round3, round4],
  });

  expect(match).toBeInstanceOf(Match);
  expect(match.id).toBeDefined();
  expect(match.rounds).toHaveLength(4);
  expect(match.rounds[0]).toBeInstanceOf(Round);
});

beforeAll(() => {
  card1 = createCard({ value: '1', suit: 'SPADES' });
  card2 = createCard({ value: 'JACK', suit: 'HEARTS' });
  card3 = createCard({ value: '7', suit: 'DIAMONDS' });
  card4 = createCard({ value: '6', suit: 'HEARTS' });
  cards = [card1, card2, card3, card4];

  player1 = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards,
    bet: createBet({
      predictedVictories: 2,
    }),
  });

  player2 = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards,
    bet: createBet({
      predictedVictories: 2,
    }),
  });

  player3 = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards,
    bet: createBet({
      predictedVictories: 2,
    }),
  });

  player4 = createPlayer({
    turnWins: 0,
    status: 'ACTIVE',
    cards,
    bet: createBet({
      predictedVictories: 2,
    }),
  });

  turn1 = createTurn({
    player: player1,
    card: card1,
  });

  turn2 = createTurn({
    player: player2,
    card: card2,
  });

  turn3 = createTurn({
    player: player3,
    card: card3,
  });

  turn4 = createTurn({
    player: player4,
    card: card4,
  });

  round1 = createRound({
    turns: [turn1, turn2, turn3, turn4],
    winner: player1,
  });

  round2 = createRound({
    turns: [turn1, turn2, turn3, turn4],
    winner: player2,
  });

  round3 = createRound({
    turns: [turn1, turn2, turn3, turn4],
    winner: player3,
  });

  round4 = createRound({
    turns: [turn1, turn2, turn3, turn4],
    winner: player4,
  });
});
