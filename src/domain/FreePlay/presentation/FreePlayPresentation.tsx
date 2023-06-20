import { $, component$, useSignal } from '@builder.io/qwik';
import type { Player } from '../model/Player';
import styles from './FreePlayPresentation.module.css';

const initialPlayers: Player[] = [
  {
    color: 'red',
    name: 'Player 1',
    score: 0,
  },
  {
    color: 'blue',
    name: 'Player 2',
    score: 0,
  },
];
export default component$(() => {
  const count = useSignal<Player[]>(initialPlayers);

  const addPlayer = $(() => {
    const newPlayer: Player = {
      color: 'green',
      name: `Player ${count.value.length + 1}`,
      score: 0,
    };
    count.value = [...count.value, newPlayer];
  });

  return (
    <div id={styles.container}>
      <div id={styles.playersContainer}>
        {count.value.map((player) => (
          <div
            key={`${player.name},${player.color},${player.score}`}
            class={styles.player}
            style={{
              backgroundColor: player.color,
            }}
          >
            <div>
              <h1 contentEditable='true'>{player.name}</h1>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick$={() => {
          addPlayer();
        }}
      >
        sum
      </button>
    </div>
  );
});
