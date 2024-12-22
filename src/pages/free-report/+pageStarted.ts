import { cache } from '@farfetched/core';
import { sample } from 'effector';
import { persist } from 'effector-storage/local';
import { delay, or } from 'patronum';
import { v4 as uuidv4 } from 'uuid';

import { getFreeResultQuery, getPersonalityTypesQuery } from '@/entities/PersonalityTypes';
import { $reportName } from '@/entities/Report/model';
import { $uuid } from '@/entities/User';
import { createPageStart } from '@/shared/utils/effector';

export const pageStarted = createPageStart();

const delayedPageStarted = delay(pageStarted, 1000);
export const $isLoadingPage = or(getPersonalityTypesQuery.$pending, getFreeResultQuery.$pending);

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
    clock: delayedPageStarted,
    target: getPersonalityTypesQuery.start,
});

sample({
    clock: getPersonalityTypesQuery.finished.success,
    source: $uuid,
    target: getFreeResultQuery.start,
});

sample({
    clock: getFreeResultQuery.finished.success,
    source: getPersonalityTypesQuery.$data,
    fn: (result, { result: freeResult }) => result?.find((el) => el.code === freeResult?.mbti_type)?.name ?? '',
    target: $reportName,
});

cache(getFreeResultQuery);
cache(getPersonalityTypesQuery);
