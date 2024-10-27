import { type UUID, randomUUID } from 'node:crypto';
import { Lobby } from '../entities/lobby.js';
import type { User } from '../entities/user.js';

interface LobbyProps {
  id?: UUID;
  maxPlayers: number;
  players: Pick<User, 'id'>[];
  owner: User;
}

export const createLobby = (props: LobbyProps): Lobby => {
  return new Lobby({
    id: props.id ?? randomUUID(),
    maxPlayers: props.maxPlayers,
    players: props.players,
    owner: props.owner,
  });
};
