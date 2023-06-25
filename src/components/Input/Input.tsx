import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import styles from './Input.module.css';

type Props = Omit<QwikIntrinsicElements['input'], 'children'>;

export default component$<Props>((props) => {
  return <input class={styles.input} {...props} />;
});
