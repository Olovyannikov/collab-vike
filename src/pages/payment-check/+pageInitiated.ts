import { sample } from 'effector';
import { getPageContext } from 'vike/getPageContext';

import { $currentOrderId } from '@/entities/Payment';
import { createPageInit } from '@/shared/utils/effector';

export const pageInitiated = createPageInit();

sample({
    clock: pageInitiated,
    fn: () => {
        const ctx = getPageContext();

        return ctx?.urlParsed.search.order_id ?? 'cda940b9-1357-4792-adee-1f3b6446fca0';
    },
    target: $currentOrderId,
});
