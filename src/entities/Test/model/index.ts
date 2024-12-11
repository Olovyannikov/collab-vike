import { sample } from 'effector';
import { isArray, isNumber } from 'lodash-es';
import { delay } from 'patronum';

import type { MultiChoiceAnswer, ScaleChoiceAnswer, SingleChoiceAnswer } from '../types';
import { TestEvents } from './events';
import { TestStores } from './stores';

export { TestStores, TestEvents };

const { $currentValue, $currentQuestion, $preparedQuestions, $currentPage, $scaleForm } = TestStores;
const { scaleFormFieldChanged, formPageChanged } = TestEvents;

import './submitModal';

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
                return form.answers[currentPage].answer.value as unknown as ScaleChoiceAnswer;
            }
            return null;
        }

        return null;
    },
    target: $currentValue,
});

sample({
    clock: [$scaleForm, formPageChanged],
    source: {
        form: $scaleForm,
        page: $currentPage,
    },
    fn: ({ form: { answers }, page }, pages) => {
        const currentPage = (isNumber(pages) ? pages : page) - 1;
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
