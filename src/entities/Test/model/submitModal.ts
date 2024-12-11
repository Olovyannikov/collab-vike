import { sample } from 'effector';

import { getFreeResultQuery, submitAnswersMutation } from '../api';
import { TestEvents } from './events';
import { TestStores } from './stores';

const { $scaleForm, $isSubmitModalShown } = TestStores;
const { submitScaleForm, submitModalStateChanged } = TestEvents;

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
    fn: () => {},
    target: getFreeResultQuery.start,
});
