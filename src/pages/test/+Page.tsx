import { Container } from '@mantine/core';
import { useGate } from 'effector-react';
import { useUnit } from 'effector-react/effector-react.mjs';

import { ScaleQuestion } from '@/entities/Test';
import { $currentPage, $currentQuestion, $scaleForm, scaleFormFieldChanged, TestPageGate } from '@/entities/Test/model';
const containerHeight = `calc(100dvh - 90px)`;

export default function Page() {
    useGate(TestPageGate);
    const {
        question,
        onChange,
        page,
        testForm: { answers },
    } = useUnit({
        question: $currentQuestion,
        onChange: scaleFormFieldChanged,
        page: $currentPage,
        testForm: $scaleForm,
    });

    const currentValue = () => {
        if (answers && answers.length > 0 && 'value' in answers[page].answer) {
            return answers[page].answer.value;
        }

        return '';
    };

    if (!question) return null;

    return (
        <Container display='grid' pb={40}>
            <ScaleQuestion {...question} value={String(currentValue())} page={page} onChange={onChange} />
        </Container>
    );
}
