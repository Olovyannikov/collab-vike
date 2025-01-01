import { sample } from 'effector';

import { $userOrderReportId } from '@/entities/Payment';
import { $currentContent } from '@/entities/PersonalityTypes';
import { getFullReportQuery } from '@/entities/Report';
import { createPageStart } from '@/shared/utils/effector';
import { normalizeData } from '@/shared/utils/report/normalizeData';

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    source: $userOrderReportId,
    fn: (id) => ({ id: id ?? '' }),
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
