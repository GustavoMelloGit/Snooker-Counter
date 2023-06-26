import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { BsDash, BsPlus } from '@qwikest/icons/bootstrap';
import Button from '~/components/Button/Button';
import { freePlayConfig } from '../data/constants/config';
import type { Player } from '../model/Player';
import styles from './FreePlayGame.module.css';

type Props = {
  players: Signal<Player[]>;
};
export default component$<Props>(({ players }) => {
  return (
    <div id={styles.container}>
      <div id={styles.playersContainer}>
        {players.value.map((player) => {
          return (
            <div
              key={`${player.name},${player.color},${player.score}`}
              class={styles.playerContainer}
              style={{
                backgroundColor: player.color,
              }}
            >
              <div class={styles.playerBox}>
                <h1
                  id={styles.playerName}
                  contentEditable='true'
                  onBlur$={(_, element) => {
                    const newName = element.textContent;
                    const oldName = player.name;
                    if (newName && newName !== oldName) {
                      player.name = newName;
                      players.value = [...players.value];
                    }
                  }}
                >
                  {player.name}
                </h1>
                <div id={styles.playerScoreActionsWrapper}>
                  <Button
                    onClick$={() => {
                      const newScore = player.score - freePlayConfig.scoreStep;
                      if (newScore < freePlayConfig.minPlayerScore) return;
                      player.score = newScore;
                      players.value = [...players.value];
                    }}
                  >
                    <BsDash />
                  </Button>
                  <h2 id={styles.playerScore}>{player.score}</h2>
                  <Button
                    onClick$={() => {
                      const newScore = player.score + freePlayConfig.scoreStep;
                      if (newScore >= freePlayConfig.maxPlayerScore) return;
                      player.score = newScore;
                      players.value = [...players.value];
                    }}
                  >
                    <BsPlus />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
