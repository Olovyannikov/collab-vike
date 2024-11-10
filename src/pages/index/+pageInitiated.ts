import { sample } from 'effector';

import { getQuestionsQuery } from '@/entities/Questions';
import { createPageInit } from '@/shared/utils/effector';

export const pageInitiated = createPageInit();

sample({
    clock: pageInitiated,
    target: getQuestionsQuery.start,
});
