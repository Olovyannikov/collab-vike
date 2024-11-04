import { Container } from '@mantine/core';
import { useData } from 'vike-react/useData';

import { QuestionsResponse } from '@/entities/Questions/api/dto';
import { BlurFade } from '@/shared/ui/BlurFade';

export default function Page() {
    const questions = useData<{ data: QuestionsResponse[] }>();

    // Вопросы теста
    // console.log({ questions });

    return (
        <Container>
            <h1>Cognitive Lab</h1>
            This page is:
            <ul>
                {questions?.data?.map((question, idx) => (
                    <BlurFade key={question.id} delay={0.1 * idx}>
                        <li>{question.text}</li>
                    </BlurFade>
                ))}
            </ul>
        </Container>
    );
}
