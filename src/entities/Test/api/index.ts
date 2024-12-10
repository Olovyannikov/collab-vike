import { createMutation, createQuery } from '@farfetched/core';

import { createCommonRequestFx } from '@/shared/api';
import { HTTP_METHODS } from '@/shared/api/methods';

import type { Answers } from '../types';
import type { QuestionsResponse } from './dto';

export const getQuestionsQuery = createQuery({
    effect: createCommonRequestFx<void, QuestionsResponse[]>(() => ({
        url: `/api/v1/surveys/questions`,
    })),
    mapData: ({ result }) => result.filter((el) => el.type === 'multiple_choice'),
});

export const submitAnswersMutation = createMutation({
    effect: createCommonRequestFx<Answers, void>((body) => ({
        url: `/api/v1/surveys/answers/submit`,
        method: HTTP_METHODS.POST,
        body,
    })),
});
