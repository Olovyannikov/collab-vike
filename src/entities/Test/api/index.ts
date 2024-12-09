import { createQuery } from '@farfetched/core';

import { createCommonRequestFx } from '@/shared/api';

import type { QuestionsResponse } from './dto';

export const getQuestionsQuery = createQuery({
    effect: createCommonRequestFx<void, QuestionsResponse[]>(() => ({
        url: `/api/v1/surveys/questions`,
    })),
});
