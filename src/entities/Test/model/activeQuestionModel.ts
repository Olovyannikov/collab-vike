import { createEvent, createStore, sample } from 'effector';

const $activeQuestion = createStore<number | null>(null);
const activeQuestionChanged = createEvent<number>();

sample({
    clock: activeQuestionChanged,
    target: $activeQuestion,
});

export const ActiveQuestionModel = {
    $activeQuestion,
    activeQuestionChanged,
};
