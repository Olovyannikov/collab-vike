import { cache } from '@farfetched/core';
import { createEffect, sample } from 'effector';
import { or } from 'patronum';
import { navigate } from 'vike/client/router';

import { getFreeResultQuery, getPersonalityTypesQuery } from '@/entities/PersonalityTypes';
import { $reportName } from '@/entities/Report/model';
import { $uuid } from '@/entities/User';
import { createPageStart } from '@/shared/utils/effector';

export const pageStarted = createPageStart();

export const $isLoadingPage = or(getPersonalityTypesQuery.$pending, getFreeResultQuery.$pending);

const redirectToIndexPageFx = createEffect(async () => {
    await navigate('/');
});

sample({
    clock: pageStarted,
    target: getPersonalityTypesQuery.start,
});

sample({
    clock: getPersonalityTypesQuery.finished.success,
    source: $uuid,
    filter: (uuid) => Boolean(uuid.length),
    target: getFreeResultQuery.start,
});

sample({
    clock: getFreeResultQuery.finished.success,
    source: getPersonalityTypesQuery.$data,
    fn: (result, { result: freeResult }) => result?.find((el) => el.code === freeResult?.mbti_type)?.name ?? '',
    target: $reportName,
});

sample({
    clock: getFreeResultQuery.finished.failure,
    target: redirectToIndexPageFx,
});

cache(getFreeResultQuery);
cache(getPersonalityTypesQuery);
