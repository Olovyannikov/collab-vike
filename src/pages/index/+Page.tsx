import { Container } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getQuestionsQuery } from '@/entities/Questions';
import { BlurFade } from '@/shared/ui';

export default function Page() {
    const { data: questions } = useUnit(getQuestionsQuery);

    return (
        <Container>
            <ul>
                {questions?.map((question, idx) => (
                    <BlurFade key={question.id} delay={0.1 * idx}>
                        <li>{question.text}</li>
                    </BlurFade>
                ))}
            </ul>
        </Container>
    );
}
