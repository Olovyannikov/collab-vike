import { createStore, sample } from 'effector';

import { Content, getFreeResultQuery } from '@/entities/PersonalityTypes';

import type { FreeResult } from '../types';

export const $freeResult = createStore<FreeResult | null>(null);
export const $freeContent = createStore<Content['content'][] | null>(null);

sample({
    clock: $freeResult,
    fn: (result) => {
        if (!result) return null;
        const res: Content['content'][] = [];
        const content = result.content.map((item) => item.content);
        content.forEach((el) => el.forEach((item) => res.push(item.content)));

        console.log({ res });

        return res;
    },
    target: $freeContent,
});

sample({
    clock: getFreeResultQuery.finished.success,
    fn: ({ result }) => result,
    target: $freeResult,
});
