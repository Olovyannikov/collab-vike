import { createQuery } from '@farfetched/core';

import { createCommonRequestFx } from '@/shared/api';
import { API } from '@/shared/api/contants';

import type { PersonalityTypesResponse } from '../types';

export const getPersonalityTypesWithCategoriesQuery = createQuery({
    effect: createCommonRequestFx<void, PersonalityTypesResponse[]>(() => ({
        url: API.PERSONALITY_TYPES,
    })),
});
