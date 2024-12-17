import { createMutation } from '@farfetched/core';

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
