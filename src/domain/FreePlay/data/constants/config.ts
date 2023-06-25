import { playersColors } from './playerColors';

export const freePlayConfig = {
  maxNumberOfPlayers: 15,
  minNumberOfPlayers: 1,
  maxPlayerScore: 99,
  minPlayerScore: 0,
  initialPlayerScore: 0,
  scoreStep: 1,
  initialPlayerName: (position: number): string => `Player ${position}`,
  initialPlayerColor: (position: number): string => playersColors[position],
};
