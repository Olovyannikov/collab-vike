import { API } from '@/shared/api/contants';
import { STORAGE } from '@/shared/services/Storage';

import { createRequestFx } from './create-request-fx';

export const createInternalRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? API.URL,
    withTokenInHeaders: true,
    headers: {
        Authorization: `Token ${STORAGE.getItem('$uuid')?.replaceAll('"', '')}`,
    },
});

export const createCommonRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? API.URL,
});
