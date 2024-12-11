import { sample } from 'effector';
import { persist } from 'effector-storage/local';

import { getQuestionsQuery, TestStores } from '@/entities/Test';
import { $uuid } from '@/entities/User/model';
import { createPageStart } from '@/shared/utils/effector';

const { $preparedQuestions, $currentPage, $scaleForm } = TestStores;

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    source: getQuestionsQuery.$data,
    fn: (data) => data,
    target: $preparedQuestions,
});

sample({
    clock: pageStarted,
    source: $uuid,
    filter: (uuid) => uuid.length > 0,
    fn: () => crypto.randomUUID(),
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
