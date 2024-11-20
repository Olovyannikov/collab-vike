import { Container } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getQuestionsQuery, TestControls, TestModel } from '@/entities/Test';

export default function Page() {
    const { data: questions } = useUnit(getQuestionsQuery);
    const [page] = useUnit([TestModel.$currentPage]);

    if (!questions) return;

    return (
        <Container>
            <ul>{questions[page]?.map((question) => <li key={question.id}>{question.text}</li>)}</ul>
            <TestControls />
        </Container>
    );
}
