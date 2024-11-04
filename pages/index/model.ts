import { sample } from 'effector';

import { getQuestionsQuery } from '@/entities/Questions/api';
import { declarePage } from '@/shared/utils/app';

export const indexPage = declarePage({
    pageType: 'index',
});

sample({
    clock: indexPage.open,
    target: getQuestionsQuery.start,
});
