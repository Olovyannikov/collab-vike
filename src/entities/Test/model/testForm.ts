import { createArrayField, createForm } from '@effector-reform/core';
import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

const $$testForm = createForm({
    schema: {
        answers: createArrayField<{
            question: string;
            answer: {
                value: number;
            };
        }>([]),
    },
});

const fieldChanged = createEvent<{ question: string; answer: { value: number }; index: number }>();

sample({
    clock: fieldChanged,
    source: $$testForm.$values,
    fn: (form, field) => {
        form.answers[field.index] = {
            question: field.question,
            answer: field.answer,
        };

        return form.answers;
    },
    target: $$testForm.fields.answers.change,
});

const $testVal = $$testForm.$values.map((el) => el.answers.map((el) => el.answer.value));

export const TestFormModel = {
    $$testForm,
    fieldChanged,
    $testVal,
};
