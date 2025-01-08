import { cache, retry } from '@farfetched/core';
import { createEffect, sample } from 'effector';
import { or } from 'patronum';
import { navigate } from 'vike/client/router';

import { getFreeResultQuery, getPersonalityTypesQuery } from '@/entities/Report';
import { $reportName } from '@/entities/Report/model';
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
    target: getFreeResultQuery.start,
});

sample({
    clock: getFreeResultQuery.finished.success,
    source: getPersonalityTypesQuery.$data,
    fn: (result, { result: freeResult }) => result?.find((el) => el.code === freeResult?.mbti_type)?.name ?? '',
    target: $reportName,
});

retry(getFreeResultQuery, {
    times: 5,
    delay: 500,
    // @ts-expect-error make issue
    otherwise: redirectToIndexPageFx,
});

cache(getFreeResultQuery);
cache(getPersonalityTypesQuery);
