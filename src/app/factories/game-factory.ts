import { type UUID, randomUUID } from 'node:crypto';
import { Game } from '../entities/game.js';
import type { Round } from '../entities/round.js';

interface GameProps {
  id?: UUID;
  lobbyId: UUID;
  rounds: Round[];
}

export const createGame = (props: GameProps): Game => {
  return new Game({
    id: props.id ?? randomUUID(),
    rounds: props.rounds,
    lobbyId: props.lobbyId,
  });
};
