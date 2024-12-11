import { $uuid } from '@/entities/User/model';
import { API } from '@/shared/api/contants';

import { createRequestFx } from './create-request-fx';

export const createInternalRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? API.URL,
    withTokenInHeaders: true,
    headers: {
        Authorization: `Token ${$uuid.getState()}`,
    },
});

export const createCommonRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? API.URL,
});
