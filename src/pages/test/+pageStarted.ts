import { sample } from 'effector';

import { getQuestionsQuery, TestStores } from '@/entities/Test';
import { createPageStart } from '@/shared/utils/effector';

const { $preparedQuestions } = TestStores;

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    source: getQuestionsQuery.$data,
    fn: (data) => data,
    target: $preparedQuestions,
});
