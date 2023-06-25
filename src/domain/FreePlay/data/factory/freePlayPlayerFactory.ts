import type { Player } from '../../model/Player';
import { freePlayConfig } from '../constants/config';

export function freePlayPlayerFactory(position: number): Player {
  return {
    color: freePlayConfig.initialPlayerColor(position),
    name: freePlayConfig.initialPlayerName(position + 1),
    score: freePlayConfig.initialPlayerScore,
  };
}
