import { sample } from 'effector';

import { $userOrderReportId } from '@/entities/Payment';
import { $currentContent, $currentName, getFullReportQuery, getPersonalityTypesQuery } from '@/entities/Report';
import { createPageStart } from '@/shared/utils/effector';
import { normalizeData } from '@/shared/utils/report/normalizeData';

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    source: $userOrderReportId,
    fn: (id, pageCtx) => {
        let currentId = id ?? '';

        if (pageCtx?.routeParams.user_report_id) {
            currentId = pageCtx?.routeParams?.user_report_id;
        }

        return { id: currentId };
    },
    target: getFullReportQuery.start,
});

sample({
    clock: getFullReportQuery.finished.success,
    fn: ({ result }) => {
        if (!result.content.length) return [];
        // TODO: доделать контент парсинг
        console.log({
            result: result.content.map((item) => ({ content: item.content, title: item.title })).flat(),
        });
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
