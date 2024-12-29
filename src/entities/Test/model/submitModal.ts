import { notifications } from '@mantine/notifications';
import { createEffect, sample } from 'effector';
import { navigate } from 'vike/client/router';

import { submitAnswersMutation } from '../api';
import { TestEvents } from './events';
import { TestStores } from './stores';

const { $scaleForm, $isSubmitModalShown } = TestStores;
const { submitScaleForm, submitModalStateChanged } = TestEvents;

const redirectToFreeReportPageFx = createEffect(async () => {
    await navigate('/free-report');
});

const showSubmitErrorFx = createEffect(async (message: string) => {
    notifications.show({
        color: 'red',
        title: 'Ошибка!',
        message,
    });
});

sample({
    clock: submitModalStateChanged,
    source: $isSubmitModalShown,
    fn: (param) => !param,
    target: $isSubmitModalShown,
});

sample({
    clock: submitScaleForm,
    source: $scaleForm,
    target: submitAnswersMutation.start,
});

sample({
    clock: submitAnswersMutation.finished.success,
    fn: () => false,
    target: $isSubmitModalShown,
});

sample({
    clock: submitAnswersMutation.finished.success,
    filter: () => !window?.location.origin.includes('free-report'),
    fn: ({ result }) => result.id,
    target: TestStores.$surveyId,
});

sample({
    clock: submitAnswersMutation.finished.success,
    filter: () => !window?.location.origin.includes('free-report'),
    target: redirectToFreeReportPageFx,
});

sample({
    clock: submitAnswersMutation.finished.failure,
    fn: (params) => {
        return params.error.message;
    },
    target: showSubmitErrorFx,
});
