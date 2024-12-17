import { cache } from '@farfetched/core';
import { sample } from 'effector';

import { getFreeResultQuery, getPersonalityTypesQuery } from '@/entities/PersonalityTypes';
import { $reportName } from '@/entities/Report/model';
import { $uuid } from '@/entities/User';
import { STORAGE } from '@/shared/services/Storage';
import { createPageStart } from '@/shared/utils/effector';

export const pageStarted = createPageStart();

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
