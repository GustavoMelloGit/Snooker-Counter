import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FreePlayPresentation from '~/domain/FreePlay/presentation/FreePlay';

export default component$(() => {
  return <FreePlayPresentation />;
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
