import { createEvent, createStore, sample } from 'effector';

import type { QuestionsResponse } from '../api/dto';
import type { Answers, PreparedAnswer, ScaleChoiceAnswer } from '../types';

export const $preparedQuestions = createStore<QuestionsResponse[] | null>(null);

export const $currentPage = createStore(0);
export const $currentQuestion = createStore<QuestionsResponse | null>(null);
export const $scaleForm = createStore<Answers>({
    answers: [],
});
export const $currentValue = createStore<ScaleChoiceAnswer | null>(null);

export const scaleFormFieldChanged = createEvent<PreparedAnswer>();

sample({
    clock: [$currentPage, $preparedQuestions],
    source: {
        page: $currentPage,
        questions: $preparedQuestions,
    },
    fn: ({ page, questions }) => {
        if (!questions) return null;
        return questions[page];
    },
    target: $currentQuestion,
});

sample({
    clock: scaleFormFieldChanged,
    source: $scaleForm,
    fn: (form, field) => {
        form.answers[field.index] = field;

        return { ...form };
    },
    target: $scaleForm,
});

sample({
    clock: scaleFormFieldChanged,
    source: $currentPage,
    fn: (page) => page + 1,
    target: $currentPage,
});

sample({
    clock: $scaleForm,
    source: $currentPage,
    fn: (page, { answers }) => {
        if (!answers[page]?.answer) return null;

        if (answers && answers.length > 0 && 'value' in answers[page].answer) {
            return answers[page].answer.value as unknown as ScaleChoiceAnswer;
        }

        return null;
    },
    target: $currentValue,
});
