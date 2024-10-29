import { beforeAll, expect, test } from "vitest";
import { Card } from "../entities/card.js";
import { Bet } from "../entities/bet.js";
import { Player } from "../entities/player.js";
import { Turn } from "../entities/turn.js";
import { getCard } from "../factories/card-factory.js";
import { createBet } from "../factories/bet-factory.js";
import { createPlayer } from "../factories/player-factory.js";
import { createTurn } from "../factories/turn-factory.js";
import { createRound } from "../factories/round-factory.js";
import { Pile } from "../entities/pile.js";
import { createPile } from "../factories/pile-factory.js";

let pile: Pile;
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

test("should declare draw for the round", () => {
  const round = createRound({
    turns: [turn1, turn2, turn3, turn4],
    pile,
  });

  expect(round.isDraw).toBe(true);
});

beforeAll(() => {
  pile = createPile({
    cardsPlayed: [],
  });

  cards1 = [getCard({ value: "1", suit: "HEARTS" })];
  cards2 = [getCard({ value: "1", suit: "CLUBS" })];
  cards3 = [getCard({ value: "2", suit: "SPADES" })];
  cards4 = [getCard({ value: "2", suit: "DIAMONDS" })];

  bet = createBet({
    predictedVictories: 1,
  });

  player1 = createPlayer({
    turnWins: 0,
    status: "ACTIVE",
    cards: cards1,
    bet,
  });

  player2 = createPlayer({
    turnWins: 0,
    status: "ACTIVE",
    cards: cards2,
    bet,
  });

  player3 = createPlayer({
    turnWins: 0,
    status: "ACTIVE",
    cards: cards3,
    bet,
  });

  player4 = createPlayer({
    turnWins: 0,
    status: "ACTIVE",
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
