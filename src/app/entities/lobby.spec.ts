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
    email: 'johndoe@gmail.com',
    username: 'John Doe',
    password: '123456',
  });

  player1 = new User({
    email: 'player1@gmail.com',
    username: 'Player 1',
    password: '123456',
  });

  player2 = new User({
    email: 'player2@gmail.com',
    username: 'Player 2',
    password: '123456',
  });

  player3 = new User({
    email: 'player3@gmail.com',
    username: 'Player 3',
    password: '123456',
  });

  player4 = new User({
    email: 'player4@gmail.com',
    username: 'Player 4',
    password: '123456',
  });
});

test('create lobby', () => {
  const sut = new Lobby({
    maxPlayers: 4,
    players: [player1, player2],
    owner,
  });

  expect(sut.players[0].username).contain('Player 1');
  expect(sut.players[1].username).contain('Player 2');

  expect(sut.owner.username).contain('John Doe');
});

test('cannot create a lobby with more players than max players', () => {
  expect(() => {
    new Lobby({
      maxPlayers: 4,
      players: [player1, player2, player3, player4],
      owner,
    });
  }).toThrowError('Cannot create a lobby with more players than max players');
});

test('cannot create a lobby with max player more than limit', () => {
  expect(() => {
    new Lobby({
      maxPlayers: 11,
      players: [player1],
      owner,
    });
  }).toThrowError('Max players limit exceeded');
});

test('cannot create a lobby with players with a lower limit', () => {
  expect(() => {
    new Lobby({
      maxPlayers: 1,
      players: [player1],
      owner,
    });
  }).toThrowError('Min players limit insufficient');
});
