import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FreePlay from '~/domain/FreePlay/presentation/FreePlay';

export default component$(() => {
  return <FreePlay />;
});

export const head: DocumentHead = {
  title: 'Multiple Players Counter',
  meta: [
    {
      name: 'description',
      content: 'A simple counter app for multiple players',
    },
  ],
};
