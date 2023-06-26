import { component$, useStore } from '@builder.io/qwik';
import { freePlayConfig } from '../data/constants/config';
import useFreePlayPlayers from '../usecases/hooks/useFreePlayPlayers';
import FreePlayGame from './FreePlayGame';
import GameConfiguration from './GameConfiguration';

export default component$(() => {
  const modalIsOpen = useStore({
    value: true,
  });
  const { players, addPlayer$, changePlayerName$, changePlayerScore$ } =
    useFreePlayPlayers();

  return (
    <>
      {modalIsOpen.value && (
        <GameConfiguration
          onSubmit$={(values) => {
            Array.from({ length: values.players }, (_, i) => {
              addPlayer$({
                color: freePlayConfig.initialPlayerColor(i),
                name: freePlayConfig.initialPlayerName(i + 1),
                score: values.score,
                id: i,
              });
            });
            modalIsOpen.value = false;
          }}
        />
      )}
      <FreePlayGame
        players={players}
        onChangePlayerName$={changePlayerName$}
        onChangePlayerScore$={changePlayerScore$}
      />
    </>
  );
});
