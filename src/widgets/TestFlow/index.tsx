import type { ReactNode } from 'react';
import { useUnit } from 'effector-react';
import { isArray } from 'lodash-es';

import {
    MultipleQuestion,
    ScaleQuestion,
    type SingleChoiceAnswer,
    SingleQuestion,
    TestEvents,
    TestStores,
} from '@/entities/Test';

const { $currentQuestion, $currentPage, $currentValue } = TestStores;
const { scaleFormFieldChanged } = TestEvents;

export const TestFlow = () => {
    const { question, onChange, page, currentValue } = useUnit({
        question: $currentQuestion,
        onChange: scaleFormFieldChanged,
        page: $currentPage,
        currentValue: $currentValue,
    });

    if (!question) return null;

    const Map: Record<string, ReactNode> = {
        scale: <ScaleQuestion {...question} value={String(currentValue)} page={page} onChange={onChange} />,
        multiple_choice: question.options && (
            <MultipleQuestion
                {...question}
                page={page}
                onChange={onChange}
                value={isArray(currentValue) ? currentValue : null}
            />
        ),
        single_choice: question.options && (
            <SingleQuestion {...question} page={page} onChange={onChange} value={currentValue as SingleChoiceAnswer} />
        ),
    };

    return <>{Map[question.type]}</>;
};
