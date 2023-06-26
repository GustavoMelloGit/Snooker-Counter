import { component$ } from '@builder.io/qwik';
import { BsDash, BsPlus } from '@qwikest/icons/bootstrap';
import Button from '~/components/Button/Button';
import { freePlayConfig } from '../data/constants/config';
import type { Player } from '../model/Player';
import styles from './FreePlayGame.module.css';

type Props = {
  players: Player[];
  onChangePlayerName$: (player: Player, newName: string) => void;
  onChangePlayerScore$: (player: Player, newScore: number) => void;
};
export default component$<Props>(
  ({ players, onChangePlayerName$, onChangePlayerScore$ }) => {
    return (
      <div id={styles.container}>
        <div id={styles.playersContainer}>
          {players.map((player) => {
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
                        onChangePlayerName$(player, newName);
                      }
                    }}
                  >
                    {player.name}
                  </h1>
                  <div id={styles.playerScoreActionsWrapper}>
                    <Button
                      onClick$={() => {
                        const newScore =
                          player.score - freePlayConfig.scoreStep;
                        if (newScore < freePlayConfig.minPlayerScore) return;
                        onChangePlayerScore$(player, newScore);
                      }}
                    >
                      <BsDash />
                    </Button>
                    <h2 id={styles.playerScore}>{player.score}</h2>
                    <Button
                      onClick$={() => {
                        const newScore =
                          player.score + freePlayConfig.scoreStep;
                        if (newScore >= freePlayConfig.maxPlayerScore) return;
                        player.score = newScore;
                        onChangePlayerScore$(player, newScore);
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
  }
);
