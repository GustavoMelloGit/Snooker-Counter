import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import styles from './Button.module.css';

type Props = QwikIntrinsicElements['button'];

export default component$((props: Props) => {
  return (
    <button class={styles.button} {...props}>
      <Slot />
    </button>
  );
});
