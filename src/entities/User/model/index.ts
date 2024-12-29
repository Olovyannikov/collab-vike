import { createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';
import { delay } from 'patronum';
import { v4 as uuidv4 } from 'uuid';

import { appService } from '@/shared/services/app';

export const $uuid = createStore('');

const delayedAppStarted = delay(appService.appStarted, 500);

persist({
    store: $uuid,
    pickup: appService.appStarted,
});

sample({
    clock: delayedAppStarted,
    source: $uuid,
    fn: (currentUuid) => {
        if (currentUuid.length > 0) return currentUuid;
        return uuidv4();
    },
    target: $uuid,
});
