import { createEvent, createStore, sample } from 'effector';

import { getQuestionsQuery } from '@/entities/Questions';

export const inc = createEvent();

export const $data = createStore('');

export const $random = createStore(0);

export const $counter = createStore(0).on(inc, (val) => val + 1);

export const invalidateData = createEvent<{ category?: string }>();

sample({
    clock: invalidateData,
    target: getQuestionsQuery.refresh,
});

export const model = {
    inc,
    $data,
    $random,
    $counter,
    invalidateData,
};
