import { sample } from 'effector';

import { getBlogPostsQuery } from '@/entities/Blog';
import { createPageStart } from '@/shared/utils/effector';

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    target: getBlogPostsQuery.start,
});
