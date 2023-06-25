import { component$, useSignal, useStore } from '@builder.io/qwik';
import { freePlayConfig } from '../data/constants/config';
import type { Player } from '../model/Player';
import FreePlayGame from './FreePlayGame';
import GameConfiguration from './GameConfiguration';

const initialPlayers: Player[] = [
  {
    color: freePlayConfig.initialPlayerColor(0),
    name: freePlayConfig.initialPlayerName(0),
    score: freePlayConfig.initialPlayerScore,
  },
  {
    color: freePlayConfig.initialPlayerColor(1),
    name: freePlayConfig.initialPlayerName(1),
    score: freePlayConfig.initialPlayerScore,
  },
];

export default component$(() => {
  const modalIsOpen = useStore({
    value: true,
  });
  const players = useSignal<Player[]>(initialPlayers);

  return (
    <>
      {modalIsOpen.value && (
        <GameConfiguration
          onSubmit$={(values) => {
            players.value = Array.from({ length: values.players }, (_, i) => ({
              color: freePlayConfig.initialPlayerColor(i),
              name: freePlayConfig.initialPlayerName(i + 1),
              score: values.score,
            }));
            modalIsOpen.value = false;
          }}
        />
      )}
      <FreePlayGame players={players} />
    </>
  );
});
