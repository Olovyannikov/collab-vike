import { API } from '@/shared/api/contants';

import { createRequestFx } from './create-request-fx';

export const createInternalRequestFx = createRequestFx({
    baseURL: import.meta.env.INTERNAL_API_URL ?? API.URL,
    withTokenInHeaders: true,
});

export const createCommonRequestFx = createRequestFx({
    baseURL: API.URL,
    headers: {},
});
