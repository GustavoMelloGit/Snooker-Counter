import { $, component$, useSignal } from '@builder.io/qwik';
import type { Player } from '../model/Player';
import styles from './FreePlayPresentation.module.css';

const colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

const initialPlayers: Player[] = [
  {
    color: colors[0],
    name: 'Player 1',
    score: 0,
  },
  {
    color: colors[1],
    name: 'Player 2',
    score: 0,
  },
];
export default component$(() => {
  const count = useSignal<Player[]>(initialPlayers);

  const addPlayer = $(() => {
    const newPlayer: Player = {
      color: colors[count.value.length],
      name: `Player ${count.value.length + 1}`,
      score: 0,
    };
    count.value = [...count.value, newPlayer];
  });

  return (
    <div id={styles.container}>
      <div id={styles.playersContainer}>
        {count.value.map((player, index) => (
          <div
            key={`${player.name},${player.color},${player.score}`}
            class={styles.player}
            style={{
              backgroundColor: player.color,
            }}
            onClick$={() => {
              count.value = count.value.filter((_, i) => i !== index);
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
