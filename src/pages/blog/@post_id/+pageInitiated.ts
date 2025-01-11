import { sample } from 'effector';
import { getPageContext } from 'vike/getPageContext';

import { getBlogPostByIdQuery } from '@/entities/Blog';
import { createPageInit } from '@/shared/utils/effector';

export const pageInitiated = createPageInit();

sample({
    clock: pageInitiated,
    fn: () => {
        const ctx = getPageContext();

        return ctx?.routeParams.post_id ?? '';
    },
    target: getBlogPostByIdQuery.start,
});

sample({
    clock: getBlogPostByIdQuery.finished.failure,
    fn: ({ error }) => {
        console.log('asd', error);
    },
});

sample({
    clock: getBlogPostByIdQuery.finished.success,
    fn: ({ result }) => {
        console.log('asd', result);
    },
});
