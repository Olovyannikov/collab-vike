import { createForm } from '@effector-reform/core';
import { zodAdapter } from '@effector-reform/zod';
import { notifications } from '@mantine/notifications';
import { createEffect, sample } from 'effector';

import { sendFreeReportOnEmailMutation } from '@/entities/Report';

import { SendReportSchema } from '../schema';

export const sendReportForm = createForm({
    schema: {
        email: '',
    },
    validation: zodAdapter(SendReportSchema),
});

const showUserEmailNotificationFx = createEffect((email: string) => {
    notifications.show({
        title: 'Отчет отправлен!',
        message: `Отчет отправлен на почту ${email}`,
    });
});

sample({
    clock: sendReportForm.submitted,
    fn: (values) => ({ email: values.email }),
    target: sendFreeReportOnEmailMutation.start,
});

sample({
    clock: sendFreeReportOnEmailMutation.finished.success,
    filter: ({ params }) => Boolean(params.email),
    fn: ({ params: { email } }) => email,
    target: showUserEmailNotificationFx,
});
