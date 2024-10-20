import { randomUUID } from 'node:crypto';
import { beforeAll, expect, test } from 'vitest';
import { Lobby } from './lobby';
import { User } from './user';

let owner: User;
let player1: User;
let player2: User;
let player3: User;
let player4: User;

beforeAll(() => {
  owner = new User({
    id: randomUUID(),
    email: 'johndoe@gmail.com',
    username: 'John Doe',
    password: '123456',
  });

  player1 = new User({
    id: '7a70f481-bdcf-4c30-92f6-5b290ad63ec3',
    email: 'player1@gmail.com',
    username: 'Player 1',
    password: '123456',
  });

  player2 = new User({
    id: '469e5f5d-0b73-451d-bbc5-51f5eac0189a',
    email: 'player2@gmail.com',
    username: 'Player 2',
    password: '123456',
  });

  player3 = new User({
    id: '312e02fe-99f2-4ad1-b5c2-ccdd8eb9fdf7',
    email: 'player3@gmail.com',
    username: 'Player 3',
    password: '123456',
  });

  player4 = new User({
    id: 'b841d16b-7291-4ac1-96a7-15f0a4f02b4e',
    email: 'player4@gmail.com',
    username: 'Player 4',
    password: '123456',
  });
});

test('create lobby', () => {
  const lobby = new Lobby({
    id: randomUUID(),
    maxPlayers: 4,
    players: [player1, player2],
    owner,
  });

  expect(lobby.players[0].id).contain('7a70f481-bdcf-4c30-92f6-5b290ad63ec3');
  expect(lobby.players[1].id).contain('469e5f5d-0b73-451d-bbc5-51f5eac0189a');

  expect(lobby.owner.username).contain('John Doe');
});

test('cannot create a lobby with more players than max players', () => {
  expect(() => {
    new Lobby({
      id: randomUUID(),
      maxPlayers: 4,
      players: [player1, player2, player3, player4],
      owner,
    });
  }).toThrowError('Cannot create a lobby with more players than max players');
});

test('cannot create a lobby with max player more than limit', () => {
  expect(() => {
    new Lobby({
      id: randomUUID(),
      maxPlayers: 11,
      players: [player1],
      owner,
    });
  }).toThrowError('Max players limit exceeded');
});

test('cannot create a lobby with players with a lower limit', () => {
  expect(() => {
    new Lobby({
      id: randomUUID(),
      maxPlayers: 1,
      players: [player1],
      owner,
    });
  }).toThrowError('Min players limit insufficient');
});
