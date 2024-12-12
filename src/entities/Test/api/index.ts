import { createMutation, createQuery } from '@farfetched/core';

import { createCommonRequestFx, createInternalRequestFx } from '@/shared/api';
import { HTTP_METHODS } from '@/shared/api/methods';

import type { Answers, PersonalityType } from '../types';
import type { QuestionsResponse } from './dto';

export const getQuestionsQuery = createQuery({
    effect: createCommonRequestFx<void, QuestionsResponse[]>(() => ({
        url: `/api/v1/surveys/questions`,
    })),
    // TODO: @test only multiple
    mapData: ({ result }) => result.filter((el) => el.type === 'multiple_choice'),
    // TODO: @test only single
    // mapData: ({ result }) => result.filter((el) => el.type === 'single_choice'),
    // TODO: @test only scale
    // mapData: ({ result }) => result.filter((el) => el.type === 'scale'),
});

export const submitAnswersMutation = createMutation({
    effect: createCommonRequestFx<Answers, void>((body) => ({
        url: `/api/v1/surveys/answers/submit`,
        method: HTTP_METHODS.POST,
        body,
    })),
});

export const getFreeResultQuery = createQuery({
    effect: createInternalRequestFx<void, void>(() => ({
        url: `/api/v1/surveys/free-report`,
    })),
});

export const getPersonalityTypeQuery = createQuery({
    effect: createCommonRequestFx<PersonalityType, void>((type) => ({
        url: `api/v1/surveys/personality-types/${type}`,
    })),
});
