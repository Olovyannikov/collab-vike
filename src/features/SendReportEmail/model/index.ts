import { notifications } from '@mantine/notifications';
import { createEffect, createEvent, sample } from 'effector';

import { sendFreeReportOnEmailMutation } from '@/entities/Report';
import { $userEmail } from '@/entities/User';

export const freeReportSent = createEvent();

const showUserEmailNotificationFx = createEffect((email: string) => {
    notifications.show({
        title: 'Отчет отправлен!',
        message: `Отчет отправлен на почту ${email}`,
    });
});

sample({
    clock: freeReportSent,
    source: $userEmail,
    fn: (email) => ({ email }),
    target: sendFreeReportOnEmailMutation.start,
});

sample({
    clock: sendFreeReportOnEmailMutation.finished.success,
    filter: ({ params }) => Boolean(params.email),
    fn: ({ params: { email } }) => email,
    target: showUserEmailNotificationFx,
});
