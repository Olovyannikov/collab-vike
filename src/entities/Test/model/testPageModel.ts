import { createEvent, createStore, sample } from 'effector';

import { getQuestionsQuery } from '@/entities/Test';

const $currentTestPage = createStore(1);
const $progress = createStore(0);

const testPageChanged = createEvent<number>();

sample({
    clock: $currentTestPage,
    source: getQuestionsQuery.$data,
    fn: (questions, currentPage) => {
        if (!questions) return 0;
        return Number.parseInt(String(100 * ((currentPage - 1) / questions.length)));
    },
    target: $progress,
});

sample({
    clock: testPageChanged,
    target: $currentTestPage,
});

export const TestPageModel = {
    $currentTestPage,
    $progress,
    testPageChanged,
};
