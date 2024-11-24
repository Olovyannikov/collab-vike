import { type ForwardedRef, forwardRef, useEffect } from 'react';
import { useForm } from '@effector-reform/react';
import { Stack } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useUnit } from 'effector-react';

import { getQuestionsQuery, SingleChoiceQuestion, TestFormModel, TestPageModel, TestProgress } from '@/entities/Test';

export const TestBlock = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    const { data: questions } = useUnit(getQuestionsQuery);
    const [activePage, progress, changeField] = useUnit([
        TestPageModel.$currentTestPage,
        TestPageModel.$progress,
        TestFormModel.fieldChanged,
    ]);

    const { fields, values } = useForm(TestFormModel.$$testForm);

    const [key] = useLocalStorage<
        {
            question: string;
            answer: { value: number };
        }[]
    >({
        key: '$values',
        defaultValue: [],
    });

    useEffect(() => {
        if (!key || !key.length) return;
        fields.answers.onChange(key);
    }, [key]);
    if (!questions) return;

    const items = questions[activePage - 1]?.map((question, idx) => (
        <SingleChoiceQuestion
            {...question}
            key={question.id}
            onChange={changeField}
            index={questions.flat().indexOf(question)}
        />
    ));

    return (
        <Stack ref={ref}>
            <TestProgress progress={Number(progress)} />
            {items}
        </Stack>
    );
});

TestBlock.displayName = 'TestBlock';
