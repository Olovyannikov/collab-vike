import { sample } from 'effector';
import { persist } from 'effector-storage/local';
import { delay } from 'patronum';

import { getQuestionsQuery, TestStores } from '@/entities/Test';
import { $uuid } from '@/entities/User';
import { createPageStart } from '@/shared/utils/effector';

const { $preparedQuestions, $currentPage, $scaleForm, $currentProgress } = TestStores;

export const pageStarted = createPageStart();
const delayedPageStarted = delay(pageStarted, 1000);

sample({
    clock: pageStarted,
    source: getQuestionsQuery.$data,
    fn: (data) => data,
    target: $preparedQuestions,
});

sample({
    clock: delayedPageStarted,
    source: $uuid,
    fn: (uuid) => {
        if (uuid.length > 0) return uuid;
        return crypto.randomUUID();
    },
    target: $uuid,
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
    store: $uuid,
    pickup: pageStarted,
});

persist({
    store: $currentProgress,
    pickup: pageStarted,
});
