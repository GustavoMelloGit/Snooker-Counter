import type { QRL } from '@builder.io/qwik';
import { $, useStore } from '@builder.io/qwik';
import type { Player } from '../../model/Player';

type UseFreePlayPlayers = {
  players: Player[];
  addPlayer$: QRL<(player: Player) => void>;
  changePlayerName$: QRL<(player: Player, newName: string) => void>;
  changePlayerScore$: QRL<(player: Player, newScore: number) => void>;
  removePlayer$: QRL<(player: Player) => void>;
};

type Props = {
  initialPlayers?: Player[];
};
export default function useFreePlayPlayers(config?: Props): UseFreePlayPlayers {
  const players = useStore<Player[]>(config?.initialPlayers ?? []);

  const addPlayer$: UseFreePlayPlayers['addPlayer$'] = $((player) => {
    players.push(player);
  });

  const changePlayerName$: UseFreePlayPlayers['changePlayerName$'] = $(
    (player, newName) => {
      const playerIndex = players.findIndex((p) => p.id === player.id);
      if (playerIndex === -1) return;
      players[playerIndex].name = newName;
    }
  );

  const changePlayerScore$: UseFreePlayPlayers['changePlayerScore$'] = $(
    (player, newScore) => {
      const playerIndex = players.findIndex((p) => p.id === player.id);
      if (playerIndex === -1) return;
      players[playerIndex].score = newScore;
    }
  );

  const removePlayer$: UseFreePlayPlayers['removePlayer$'] = $((player) => {
    const playerIndex = players.findIndex((p) => p.id === player.id);
    if (playerIndex === -1) return;
    players.splice(playerIndex, 1);
  });

  return {
    players,
    addPlayer$,
    changePlayerName$,
    changePlayerScore$,
    removePlayer$,
  };
}
