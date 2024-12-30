import { notifications } from '@mantine/notifications';
import { createEffect, createEvent, sample } from 'effector';

import type { HelpFormProps } from './types';

const sendHelpForm = createEffect(() => {
    notifications.show({
        title: 'Успешно!',
        message: 'Ваш вопрос отправлен',
    });
});

export const submitHelpForm = createEvent<HelpFormProps>();

sample({
    clock: submitHelpForm,
    fn: (data) => {
        console.log({ data });
    },
    target: sendHelpForm,
});
