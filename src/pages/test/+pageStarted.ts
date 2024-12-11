import { sample } from 'effector';
import { persist } from 'effector-storage/local';

import { getQuestionsQuery, TestStores } from '@/entities/Test';
import { createPageStart } from '@/shared/utils/effector';

const { $preparedQuestions, $currentPage, $scaleForm } = TestStores;

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    source: getQuestionsQuery.$data,
    fn: (data) => data,
    target: $preparedQuestions,
});

persist({
    store: $currentPage,
    pickup: pageStarted,
});

persist({
    store: $scaleForm,
    pickup: pageStarted,
});
