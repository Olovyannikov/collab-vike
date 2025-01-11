import { sample } from 'effector';
import { getPageContext } from 'vike/getPageContext';

import { $currentOrderId } from '@/entities/Payment';
import { createPageInit } from '@/shared/utils/effector';

export const pageInitiated = createPageInit();

sample({
    clock: pageInitiated,
    fn: () => {
        const ctx = getPageContext();

        return ctx?.urlParsed.search.order_id ?? '';
    },
    target: $currentOrderId,
});
