import { playersColors } from './playerColors';

export const freePlayConfig = {
  maxNumberOfPlayers: 15,
  minNumberOfPlayers: 1,
  initialPlayerScore: 0,
  initialPlayerName: (position: number): string => `Player ${position}`,
  initialPlayerColor: (position: number): string => playersColors[position],
};
