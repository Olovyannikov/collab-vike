import { cache } from '@farfetched/core';
import { sample } from 'effector';
import { persist } from 'effector-storage/local';
import { delay } from 'patronum';
import { v4 as uuidv4 } from 'uuid';

import { getFreeResultQuery, getPersonalityTypesQuery } from '@/entities/PersonalityTypes';
import { $reportName } from '@/entities/Report/model';
import { $uuid } from '@/entities/User';
import { STORAGE } from '@/shared/services/Storage';
import { createPageStart } from '@/shared/utils/effector';

export const pageStarted = createPageStart();

const delayedPageStarted = delay(pageStarted, 3000);

sample({
    clock: delayedPageStarted,
    source: $uuid,
    fn: (uuid) => {
        if (uuid.length > 0) return uuid;
        return uuidv4();
    },
    target: $uuid,
});

persist({
    store: $uuid,
    pickup: pageStarted,
});

sample({
    clock: pageStarted,
    source: $uuid,
    filter: () => Boolean(STORAGE.getItem('$uuid')),
    target: getFreeResultQuery.start,
});

sample({
    clock: getFreeResultQuery.finished.success,
    target: getPersonalityTypesQuery.start,
});

sample({
    clock: getPersonalityTypesQuery.finished.success,
    source: getFreeResultQuery.$data,
    fn: (freeResult, { result }) => result.find((el) => el.code === freeResult?.mbti_type)?.name ?? '',
    target: $reportName,
});

cache(getFreeResultQuery);
cache(getPersonalityTypesQuery);
