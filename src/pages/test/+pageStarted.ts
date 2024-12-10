import { sample } from 'effector';
import { persist } from 'effector-storage/local';

import { $currentPage, $preparedQuestions, $scaleForm, getQuestionsQuery } from '@/entities/Test';
import { createPageStart } from '@/shared/utils/effector';

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
