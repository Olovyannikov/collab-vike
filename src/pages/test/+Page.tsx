import { type ReactNode } from 'react';
import { Container } from '@mantine/core';
import { useUnit } from 'effector-react';
import { isArray } from 'lodash-es';

import {
    $currentPage,
    $currentQuestion,
    $currentValue,
    MultipleQuestion,
    scaleFormFieldChanged,
    ScaleQuestion,
    SingleQuestion,
} from '@/entities/Test';
import { TestControls } from '@/features/TestControls';

export default function Page() {
    const { question, onChange, page, currentValue } = useUnit({
        question: $currentQuestion,
        page: $currentPage,
        currentValue: $currentValue,
        onChange: scaleFormFieldChanged,
    });

    if (!question) return null;

    const Map: Record<string, ReactNode> = {
        scale: <ScaleQuestion {...question} value={String(currentValue)} page={page} onChange={onChange} />,
        multiple_choice: question.options ? (
            <MultipleQuestion
                {...question}
                page={page}
                onChange={onChange}
                value={isArray(currentValue) ? currentValue : null}
            />
        ) : (
            <></>
        ),
        single_choice: question.options ? (
            <SingleQuestion {...question} page={page} onChange={onChange} value={currentValue as unknown as string} />
        ) : (
            <></>
        ),
    };

    return (
        <Container display='grid' pb='5xl' h='calc(100dvh - 90px)'>
            <div>{Map[question.type]}</div>
            <TestControls />
        </Container>
    );
}
