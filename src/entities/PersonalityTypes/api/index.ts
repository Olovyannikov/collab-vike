import { createQuery } from '@farfetched/core';

import { createCommonRequestFx, createInternalRequestFx } from '@/shared/api';
import { API } from '@/shared/api/contants';
import type { PersonalityType } from '@/shared/types/models';

import type { FreeResult } from '../types';
import type { PersonalityTypesResponse } from './dto';

export const getPersonalityTypesQuery = createQuery({
    effect: createCommonRequestFx<void, PersonalityTypesResponse[]>(() => ({
        url: API.PERSONALITY_TYPES,
    })),
    mapData: ({ result }) => result.map((el) => el.types).flat(),
});

export const getPersonalityTypeQuery = createQuery({
    effect: createCommonRequestFx<PersonalityType, void>((type) => ({
        url: API.PERSONALITY_TYPE(type),
    })),
});

export const getFreeResultQuery = createQuery({
    effect: createInternalRequestFx<void, FreeResult>(() => ({
        url: `/api/v1/surveys/free-report`,
    })),
});
