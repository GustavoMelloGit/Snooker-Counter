/* eslint-disable qwik/valid-lexical-scope */
import { $, component$ } from '@builder.io/qwik';
import type { SubmitHandler } from '@modular-forms/qwik';
import { useForm, zodForm$ } from '@modular-forms/qwik';
import { z } from 'zod';
import Button from '~/components/Button/Button';
import Input from '~/components/Input/Input';
import Modal from '~/components/Modal/Modal';
import { freePlayConfig } from '../data/constants/config';

const configSchema = z.object({
  players: z
    .number()
    .min(freePlayConfig.minNumberOfPlayers, 'Valor inválido')
    .max(freePlayConfig.maxNumberOfPlayers, 'Valor inválido'),
  score: z.number().min(0, 'Valor inválido'),
});
type FormValues = z.infer<typeof configSchema>;

const initialFormValues: FormValues = {
  players: 2,
  score: 0,
};

type Props = {
  onSubmit$: (values: FormValues) => void;
};

export default component$<Props>(({ onSubmit$ }) => {
  const [, { Form, Field }] = useForm<FormValues>({
    loader: {
      value: initialFormValues,
    },
    validate: zodForm$(configSchema),
  });

  const handleSubmit: SubmitHandler<FormValues> = $((values) => {
    onSubmit$(values);
  });

  return (
    <Modal>
      <Form onSubmit$={handleSubmit}>
        <h1>Configuração inicial</h1>
        <p>Escolha o número de jogadores</p>
        <Field name='players' type='number'>
          {(field, props) => (
            <Input
              {...props}
              type='number'
              name='players'
              id='players'
              value={field.value}
              min={freePlayConfig.minNumberOfPlayers}
              max={freePlayConfig.maxNumberOfPlayers}
            />
          )}
        </Field>
        <p>Escolha a pontuação inicial</p>
        <Field name='score' type='number'>
          {(field, props) => (
            <Input
              {...props}
              type='number'
              name='score'
              id='score'
              value={field.value}
              min={0}
            />
          )}
        </Field>

        <Button type='submit'>Iniciar</Button>
      </Form>
    </Modal>
  );
});
