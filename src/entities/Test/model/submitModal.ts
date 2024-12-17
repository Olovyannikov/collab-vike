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
    target: redirectToFreeReportPageFx,
});
