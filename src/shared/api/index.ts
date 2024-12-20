import { $uuid } from '@/entities/User';
import { API } from '@/shared/api/contants';
import { STORAGE } from '@/shared/services/Storage';

import { createRequestFx } from './create-request-fx';

const token = STORAGE.getItem('$uuid')?.replaceAll('"', '') ?? $uuid.getState()?.replaceAll('"', '');

export const createInternalRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? API.URL,
    withTokenInHeaders: true,
    headers: {
        Authorization: `Token ${token}`,
    },
});

export const createCommonRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? API.URL,
});
