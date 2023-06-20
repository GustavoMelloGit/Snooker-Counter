import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <div class='player'>
        <div>
          <h1 contentEditable='true'>Player 1</h1>
        </div>
      </div>
    </div>
  );
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
