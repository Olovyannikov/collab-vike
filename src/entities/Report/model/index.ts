import { createEvent, createStore, sample } from 'effector';
import { or } from 'patronum';

import { normalizeData } from '@/shared/utils/report/normalizeData';

import { getFreeResultQuery, getFullReportQuery, getPersonalityTypesQuery } from '../api';
import type { PersonalityType } from '../api/dto';
import type { Content } from '../types';

export const $reportName = createStore('');
export const $currentName = createStore('');
export const $currentType = createStore<PersonalityType>('ENFJ');
export const $isUserReportPageLoading = or(getFullReportQuery.$pending, getPersonalityTypesQuery.$pending);

export const $currentPage = createStore(1);
export const $isLastPage = createStore(false);
export const $isFirstPage = $currentPage.map((page) => page - 1 <= 0);
export const $contentCurrentPage = createStore(0);

export const currentPageChanged = createEvent<number>();
export const $currentContent = createStore<{ content: Content['content']; title: string }[]>([]);

sample({
    clock: currentPageChanged,
    fn: (page) => page - 1,
    target: $contentCurrentPage,
});

sample({
    clock: currentPageChanged,
    fn: (page) => page,
    target: $currentPage,
});

sample({
    clock: $currentPage,
    source: $currentContent,
    fn: (content, page) => {
        return page >= content.length;
    },
    target: $isLastPage,
});

sample({
    clock: getFreeResultQuery.finished.success,
    fn: ({ result }) => {
        if (!result) return [];
        return normalizeData(result);
    },
    target: $currentContent,
});
