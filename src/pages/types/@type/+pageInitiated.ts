import { sample } from 'effector';
import { getPageContext } from 'vike/getPageContext';

import { $currentContent, getPersonalityTypeQuery, type PersonalityType } from '@/entities/Report';
import { createPageInit } from '@/shared/utils/effector';
import { normalizeData } from '@/shared/utils/report/normalizeData';

export const pageInitiated = createPageInit();

sample({
    clock: pageInitiated,
    fn: () => {
        const ctx = getPageContext();

        return (ctx?.routeParams.type ?? 'INFJ') as PersonalityType;
    },
    target: getPersonalityTypeQuery.refresh,
});

sample({
    clock: getPersonalityTypeQuery.finished.success,
    fn: ({ result }) => {
        if (!result) return [];
        return normalizeData(result);
    },
    target: $currentContent,
});
