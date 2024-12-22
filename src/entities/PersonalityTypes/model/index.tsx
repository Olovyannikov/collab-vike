import type { ReactNode } from 'react';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import { createStore, sample } from 'effector';

import { Content, getFreeResultQuery } from '@/entities/PersonalityTypes';

import type { FreeResult } from '../types';

export const $freeResult = createStore<FreeResult | null>(null);
export const $freeContent = createStore<{ content: Content['content']; title: string }[]>([]);

export const $navigationIconMap = createStore<Record<string, ReactNode>>({
    Введение: <Heart size={20} />,
});

sample({
    clock: $freeResult,
    fn: (result) => {
        if (!result) return [];
        return result.content
            .map((item) => ({ content: item.content, title: item.title }))
            .flat()
            .map((el) => ({ content: el.content.map((el) => el.content).flat(), title: el.title }))
            .flat();
    },
    target: $freeContent,
});

sample({
    clock: getFreeResultQuery.finished.success,
    fn: ({ result }) => result,
    target: $freeResult,
});
