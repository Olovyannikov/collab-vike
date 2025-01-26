import { createMutation, createQuery } from '@farfetched/core';

import {
    ContentResult,
    PersonalityResponse,
    type PersonalityType,
    type PersonalityTypesResponse,
} from '@/entities/Report';
import { createCommonRequestFx, createInternalRequestFx } from '@/shared/api';
import { API } from '@/shared/api/contants';
import { HTTP_METHODS } from '@/shared/api/methods';

export const sendFreeReportOnEmailMutation = createMutation({
    effect: createInternalRequestFx<{ email: string }, void>((body) => ({
        url: API.SEND_FREE_EMAIL,
        method: HTTP_METHODS.POST,
        body,
    })),
});

export const getFullReportQuery = createQuery({
    effect: createInternalRequestFx<{ id: string }, ContentResult>((user) => ({
        url: API.FULL_REPORT(user.id),
    })),
});

export const getPersonalityTypesQuery = createQuery({
    effect: createCommonRequestFx<void, PersonalityTypesResponse[]>(() => ({
        url: API.PERSONALITY_TYPES,
    })),
    mapData: ({ result }) => result.map((el) => el.types).flat(),
});

export const getPersonalityTypeQuery = createQuery({
    effect: createCommonRequestFx<PersonalityType, PersonalityResponse>((type) => ({
        url: API.PERSONALITY_TYPE(type),
    })),
});

export const getFreeResultQuery = createQuery({
    effect: createInternalRequestFx<void, ContentResult>(() => ({
        url: `/api/v1/surveys/free-report`,
    })),
});
