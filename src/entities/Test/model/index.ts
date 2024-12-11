import { createEvent, createStore, sample } from 'effector';
import { isArray } from 'lodash-es';
import { delay, or } from 'patronum';

import { getFreeResultQuery, SingleChoiceAnswer, submitAnswersMutation } from '@/entities/Test';

import type { QuestionsResponse } from '../api/dto';
import type { Answers, MultiChoiceAnswer, PreparedAnswer, ScaleChoiceAnswer } from '../types';

export const $preparedQuestions = createStore<QuestionsResponse[] | null>(null);

export const $currentPage = createStore<number>(1);
export const $currentQuestion = createStore<QuestionsResponse | null>(null);
export const $scaleForm = createStore<Answers>({
    answers: [],
});
export const $currentValue = createStore<PreparedAnswer['answer'] | null>(null);

export const $isSubmitModalShown = createStore(false);

export const scaleFormFieldChanged = createEvent<PreparedAnswer>();
export const formPageChanged = createEvent<number>();
export const submitScaleForm = createEvent();
export const submitModalStateChanged = createEvent();

export const $isLoadingState = or(getFreeResultQuery.$pending, submitAnswersMutation.$pending);

sample({
    clock: submitModalStateChanged,
    source: $isSubmitModalShown,
    fn: (param) => !param,
    target: $isSubmitModalShown,
});

sample({
    clock: [$currentPage, $preparedQuestions],
    source: {
        page: $currentPage,
        questions: $preparedQuestions,
    },
    fn: ({ page, questions }) => {
        if (!questions) return null;
        return questions[page - 1];
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

const delayed = delay(scaleFormFieldChanged, 1000);

sample({
    clock: delayed,
    source: $currentPage,
    filter: (_, field) => !(field.isMultiple || field.isSingle),
    fn: (page) => page + 1,
    target: formPageChanged,
});

sample({
    clock: delayed,
    source: {
        form: $scaleForm,
        page: $currentPage,
    },
    filter: (_, field) => !(field.isMultiple || field.isSingle),
    fn: ({ form, page }) => {
        const currentPage = page - 1;

        if (form.answers && form.answers.length > 0 && 'value' in form.answers[currentPage].answer) {
            if (form.answers[currentPage].answer.value) {
                return form.answers[currentPage].answer as unknown as ScaleChoiceAnswer;
            }
            return null;
        }

        return null;
    },
    target: $currentValue,
});

sample({
    clock: formPageChanged,
    source: $scaleForm,
    fn: ({ answers }, page) => {
        const currentPage = page - 1;
        if (!answers[currentPage]?.answer) return null;

        if (answers && answers[currentPage].answer && isArray(answers[currentPage].answer)) {
            return answers[currentPage].answer as unknown as MultiChoiceAnswer;
        }

        if (answers && answers.length > 0 && answers[currentPage].isSingle) {
            return answers[currentPage].answer as unknown as SingleChoiceAnswer;
        }

        if (answers && answers.length > 0 && 'value' in answers[currentPage].answer) {
            console.log('here we go');

            return answers[currentPage].answer as unknown as ScaleChoiceAnswer;
        }

        return null;
    },
    target: $currentValue,
});

sample({
    clock: $scaleForm,
    source: {
        form: $scaleForm,
        page: $currentPage,
    },
    fn: ({ form: { answers }, page }) => {
        const currentPage = page - 1;
        if (!answers[currentPage]?.answer) return null;

        if (answers && answers[currentPage].answer && isArray(answers[currentPage].answer)) {
            return answers[currentPage].answer as unknown as MultiChoiceAnswer;
        }

        if (answers && answers.length > 0 && answers[currentPage].isSingle) {
            return answers[currentPage].answer as unknown as SingleChoiceAnswer;
        }

        if (answers && answers.length > 0 && 'value' in answers[currentPage].answer) {
            return answers[currentPage].answer.value as unknown as ScaleChoiceAnswer;
        }

        return null;
    },
    target: $currentValue,
});

sample({
    clock: formPageChanged,
    fn: (page) => {
        window.scrollTo(0, 0);
        return page;
    },
    target: $currentPage,
});

sample({
    clock: submitScaleForm,
    source: $scaleForm,
    target: submitAnswersMutation.start,
});

sample({
    clock: submitAnswersMutation.finished.success,
    fn: () => false,
    target: $isSubmitModalShown,
});

sample({
    clock: submitAnswersMutation.finished.success,
    fn: () => {},
    target: getFreeResultQuery.start,
});
