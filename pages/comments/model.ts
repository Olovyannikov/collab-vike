import { createEvent, createStore, sample } from 'effector';

import { createCommentsMutation, getCommentsQuery } from '@/entities/Comments/api';
import { declarePage } from '@/shared/utils/app';

const commentsPage = declarePage({
    pageType: 'comments',
});

sample({
    clock: commentsPage.open,
    target: getCommentsQuery.start,
});

// ==== create comment
const $error = createStore(false);

const $name = createStore('');
const $text = createStore('');
const $rate = createStore<number>(5);

const nameChanged = createEvent<string>();
const textChanged = createEvent<string>();

const formSubmitted = createEvent();

sample({
    clock: [nameChanged],
    target: [$name],
});

sample({
    clock: [textChanged],
    target: [$text],
});

sample({
    clock: formSubmitted,
    source: { name: $name, text: $text, rate: $rate },
    target: createCommentsMutation.start,
});

sample({
    clock: createCommentsMutation.finished.success,
    target: getCommentsQuery.refresh,
});

sample({
    clock: createCommentsMutation.finished.success,
    fn: () => '',
    target: [$name, $text],
});

sample({
    clock: createCommentsMutation.finished.failure,
    fn: () => true,
    target: $error,
});

export { commentsPage, formSubmitted, $name, $text, $rate, textChanged, nameChanged, $error };
