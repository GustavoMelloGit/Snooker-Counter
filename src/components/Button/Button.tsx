import type { HTMLAttributes } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import styles from './Button.module.css';

type Props = HTMLAttributes<HTMLButtonElement>;

export default component$((props: Props) => {
  return (
    <button id={styles.button} {...props}>
      <Slot />
    </button>
  );
});
