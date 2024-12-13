import { sample } from 'effector';

import { TestStores } from './stores';

sample({
    clock: TestStores.$scaleForm,
    source: { questions: TestStores.$preparedQuestions, form: TestStores.$scaleForm },
    fn: ({ questions, form: { answers } }) => Number(((answers.length / (questions?.length ?? 0)) * 100).toFixed(0)),
    target: TestStores.$currentProgress,
});
