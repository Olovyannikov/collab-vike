import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { persist } from 'effector-storage/local';
import { or } from 'patronum';

import { getQuestionsQuery } from '../api';
import type { QuestionsResponse } from '../api/dto';
import type { Answers, PreparedAnswer } from '../types';

export const $currentPage = createStore(0);
export const $currentQuestion = createStore<QuestionsResponse | null>(null);
export const $scaleForm = createStore<Answers>({
    answers: [],
});

export const scaleFormFieldChanged = createEvent<PreparedAnswer>();

export const TestPageGate = createGate();

sample({
    clock: or($currentPage, getQuestionsQuery.$data),
    source: {
        page: $currentPage,
        questions: getQuestionsQuery.$data,
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

persist({
    store: $currentPage,
});

persist({
    store: $scaleForm,
    key: 'scaleForm',
    pickup: TestPageGate.open,
});
