import { createMutation, createQuery } from '@farfetched/core';

import { ContentResult } from '@/entities/PersonalityTypes';
import { createInternalRequestFx } from '@/shared/api';
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
