import { sample } from 'effector';
import { persist } from 'effector-storage/local';
import { delay } from 'patronum';
const { $currentPage, $scaleForm, $currentProgress } = TestStores;

import { TestStores } from '@/entities/Test';
import { $uuid } from '@/entities/User';
import { createPageStart } from '@/shared/utils/effector';

export const pageStarted = createPageStart();

const delayedPageStarted = delay(pageStarted, 300);

sample({
    clock: delayedPageStarted,
    source: $uuid,
    fn: (uuid) => {
        if (uuid.length > 0) return uuid;
        return crypto.randomUUID();
    },
    target: $uuid,
});

persist({
    store: $uuid,
    pickup: pageStarted,
});

persist({
    store: $currentPage,
    pickup: pageStarted,
});

persist({
    store: $scaleForm,
    pickup: pageStarted,
});

persist({
    store: $currentProgress,
    pickup: pageStarted,
});
