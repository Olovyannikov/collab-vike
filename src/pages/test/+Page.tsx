import { Container } from '@mantine/core';
import { useUnit } from 'effector-react';

import { $currentPage, $currentQuestion, $currentValue, scaleFormFieldChanged, ScaleQuestion } from '@/entities/Test';

const containerHeight = `calc(100dvh - 90px)`;

export default function Page() {
    const { question, onChange, page, currentValue } = useUnit({
        question: $currentQuestion,
        onChange: scaleFormFieldChanged,
        page: $currentPage,
        currentValue: $currentValue,
    });

    if (!question) return null;

    return (
        <Container display='grid' pb={40}>
            <ScaleQuestion {...question} value={String(currentValue)} page={page} onChange={onChange} />
        </Container>
    );
}
