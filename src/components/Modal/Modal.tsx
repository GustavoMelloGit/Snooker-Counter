import { Slot, component$ } from '@builder.io/qwik';
import styles from './Modal.module.css';

export default component$(() => {
  return (
    <div class={styles.container} aria-modal='true' role='dialog'>
      <div class={styles.overlay} />
      <div class={styles.content}>
        <div class={styles.contentWrapper}>
          <Slot />
        </div>
      </div>
    </div>
  );
});
