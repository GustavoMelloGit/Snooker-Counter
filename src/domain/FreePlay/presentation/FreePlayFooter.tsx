import { component$ } from '@builder.io/qwik';
import Button from '~/components/Button/Button';
import styles from './FreePlayFooter.module.css';

type Props = {
  addPlayer: () => void;
};
export default component$<Props>(({ addPlayer }) => {
  return (
    <footer id={styles.footer}>
      <Button
        onClick$={() => {
          addPlayer();
        }}
      >
        Adic. Jogador
      </Button>
    </footer>
  );
});
