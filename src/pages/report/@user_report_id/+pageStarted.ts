import { sample } from 'effector';

import { $userOrderReportId } from '@/entities/Payment';
import { $currentContent, $currentName, getFullReportQuery, getPersonalityTypesQuery } from '@/entities/Report';
import { createPageStart } from '@/shared/utils/effector';
import { normalizeData } from '@/shared/utils/report/normalizeData';

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    source: $userOrderReportId,
    fn: (id) => ({ id: id ?? 'cda940b9-1357-4792-adee-1f3b6446fca0' }),
    target: getFullReportQuery.start,
});

sample({
    clock: getFullReportQuery.finished.success,
    fn: ({ result }) => {
        if (!result) return [];
        return normalizeData(result);
    },
    target: $currentContent,
});

sample({
    clock: getFullReportQuery.finished.success,
    target: getPersonalityTypesQuery.start,
});

sample({
    clock: getPersonalityTypesQuery.finished.success,
    source: getFullReportQuery.$data,
    fn: (result, { result: types }) => types?.find((el) => el.code === result?.mbti_type)?.name ?? '',
    target: $currentName,
});
