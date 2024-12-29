import { sample } from 'effector';
import { persist } from 'effector-storage/local';
import { delay } from 'patronum';

import { getQuestionsQuery, TestStores } from '@/entities/Test';
import { $uuid } from '@/entities/User';
import { createPageStart } from '@/shared/utils/effector';

const { $preparedQuestions, $currentPage, $scaleForm, $currentProgress } = TestStores;

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

persist({
    store: $currentProgress,
    pickup: pageStarted,
});

persist({
    store: $uuid,
    pickup: delay(pageStarted, 1000),
});
