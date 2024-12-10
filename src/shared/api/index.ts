import { API } from '@/shared/api/contants';
import { STORAGE } from '@/shared/services/Storage';

import { createRequestFx } from './create-request-fx';

const getUUID = () => {
    const id = STORAGE.getItem('UUID');

    if (!id) STORAGE.setItem('UUID', crypto.randomUUID());

    return id;
};

export const createInternalRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? API.URL,
    withTokenInHeaders: true,
    headers: {
        Authorization: `Token ${getUUID()}`,
    },
});

export const createCommonRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? API.URL,
});
