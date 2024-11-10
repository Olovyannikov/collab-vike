import { sample } from 'effector';

import { createPageStart } from '@/shared/utils/effector';

import { $counter } from './model';

export const pageStarted = createPageStart();

sample({
    clock: pageStarted,
    source: $counter,
    filter: (val: number) => !val,
    fn: () => Math.round(Math.random() * 1000),
    target: $counter,
});
