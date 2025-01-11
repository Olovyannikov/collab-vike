import { cache, createQuery } from '@farfetched/core';

import { createCommonRequestFx } from '@/shared/api';
import { API } from '@/shared/api/contants';

import type { FaqItemResponse } from './dto';

export const getFAQQuery = createQuery({
    effect: createCommonRequestFx<void, FaqItemResponse>(() => ({
        url: API.FAQ_LIST,
    })),
});

cache(getFAQQuery);
