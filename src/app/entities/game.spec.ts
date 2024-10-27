import { beforeAll, expect, test } from 'vitest';
import { createGame } from '../factories/game-factory.js';
import { createLobby } from '../factories/lobby-factory.js';
import { createUser } from '../factories/user-factory.js';
import { Game } from './game.js';
import type { Lobby } from './lobby.js';
import type { User } from './user.js';

let owner: User;
let player: User;
let lobby: Lobby;

test('create game', () => {
  const game = createGame({
    rounds: [],
    lobbyId: lobby.id,
  });

  expect(game).toBeInstanceOf(Game);
  expect(game.id).toBeDefined();
  expect(game.rounds).toHaveLength(0);
});

beforeAll(() => {
  owner = createUser({
    email: 'johndoe@gmail.com',
    password: '123456',
    username: 'John Doe',
  });

  player = createUser({
    email: 'janedoe@gmail.com',
    password: '123456',
    username: 'Jane Doe',
  });

  lobby = createLobby({
    maxPlayers: 2,
    owner,
    players: [owner, player],
  });
});
