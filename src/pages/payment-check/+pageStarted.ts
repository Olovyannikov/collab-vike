import { sample } from 'effector';

import { $currentOrderId, $userOrder, getSurveysInfoQuery } from '@/entities/Payment';
import { createPageStart } from '@/shared/utils/effector';

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    source: $currentOrderId,
    fn: (id) => {
        return { id };
    },
    target: getSurveysInfoQuery.start,
});

sample({
    clock: getSurveysInfoQuery.finished.success,
    source: $currentOrderId,
    fn: (orderId, data) => {
        return data.result.user_orders.find((el) => el.id === orderId) ?? null;
    },
    target: $userOrder,
});
