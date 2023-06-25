import { $, component$, useSignal } from '@builder.io/qwik';
import Button from '~/components/Button/Button';
import { freePlayConfig } from '../data/constants/config';
import { playersColors } from '../data/constants/playerColors';
import type { Player } from '../model/Player';
import styles from './FreePlay.module.css';
import FreePlayPresentationFooter from './FreePlayFooter';

const initialPlayers: Player[] = [
  {
    color: freePlayConfig.initialPlayerColor(0),
    name: freePlayConfig.initialPlayerName(1),
    score: freePlayConfig.initialPlayerScore,
  },
  {
    color: freePlayConfig.initialPlayerColor(1),
    name: freePlayConfig.initialPlayerName(2),
    score: freePlayConfig.initialPlayerScore,
  },
];

export default component$(() => {
  const players = useSignal<Player[]>(initialPlayers);

  const addPlayerHandler = $((): void => {
    if (players.value.length >= freePlayConfig.maxNumberOfPlayers) return;
    const nonRepeatedColors = playersColors.filter(
      (color) => !players.value.map((player) => player.color).includes(color)
    );
    const newPlayer: Player = {
      color: nonRepeatedColors[0],
      name: freePlayConfig.initialPlayerName(players.value.length + 1),
      score: freePlayConfig.initialPlayerScore,
    };
    players.value = [...players.value, newPlayer];
  });

  return (
    <div id={styles.container}>
      <div id={styles.playersContainer}>
        {players.value.map((player, index) => {
          return (
            <div
              key={`${player.name},${player.color},${player.score}`}
              class={styles.player}
              style={{
                backgroundColor: player.color,
              }}
              onClick$={() => {
                players.value = players.value.filter((_, i) => i !== index);
              }}
            >
              <div
                onClick$={(e) => {
                  e.stopPropagation();
                }}
              >
                <h1 id={styles.playerName} contentEditable='true'>
                  {player.name}
                </h1>
                <div id={styles.playerScoreActionsWrapper}>
                  <Button
                    onClick$={() => {
                      player.score--;
                      players.value = [...players.value];
                    }}
                  >
                    -
                  </Button>
                  <h2>{player.score}</h2>
                  <Button
                    onClick$={() => {
                      player.score++;
                      players.value = [...players.value];
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <FreePlayPresentationFooter addPlayer={addPlayerHandler} />
    </div>
  );
});
