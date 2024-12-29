import { createQuery } from '@farfetched/core';

import { createInternalRequestFx } from '@/shared/api';
import { API } from '@/shared/api/contants';

export const getRegularPriceQuery = createQuery({
    effect: createInternalRequestFx<void, { regular_price: number }>(() => ({
        url: API.GET_REGULAR_PRICE,
    })),
});
