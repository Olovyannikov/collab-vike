import { Center, Grid, Paper, Text, Title } from '@mantine/core';

import { useIsLarge } from '@/shared/hooks';
import { MainButton } from '@/shared/ui';

import s from './TestStarter.module.css';

const starterQnA = [
    {
        id: 0,
        question: 'Что ожидает в тесте?',
        answer: 'Вопросеки и ответики',
    },
    {
        id: 1,
        question: 'Сколько времени займет (?)',
        answer: 'Минуток 25-30',
    },
    {
        id: 2,
        question: 'Зачем оно мне надо?',
        answer: 'Чтобы стать лучшей версией себя',
    },
];

interface TestStarterProps {
    onTestStarted: VoidFunction;
}

export const TestStarter = ({ onTestStarted }: TestStarterProps) => {
    const isLarge = useIsLarge();

    return (
        <Paper bg='violet.1' className={s.paper}>
            <Title className={s.title}>
                Тест на <br className={s.br} /> определение типа личности
            </Title>
            <Grid className={s.wrapper}>
                {starterQnA.map((q) => (
                    <Grid.Col key={q.id} className={s.block}>
                        <Paper bg='violet.0' px='sm' py='lg' w='100%'>
                            <Grid
                                h='100%'
                                align='stretch'
                                justify={isLarge ? 'center' : 'space-between'}
                                style={{ placeContent: isLarge ? 'center' : 'center' }}
                            >
                                <Grid.Col span={isLarge ? 12 : 6}>
                                    <Title ta='center' style={{ whiteSpace: 'break-spaces' }} fw={700} order={5}>
                                        {q.question}
                                    </Title>
                                </Grid.Col>
                                <Grid.Col span={isLarge ? 12 : 6}>
                                    <Text ta='center'>{q.answer}</Text>
                                </Grid.Col>
                            </Grid>
                        </Paper>
                    </Grid.Col>
                ))}
            </Grid>
            <Center>
                <MainButton onClick={onTestStarted}>Начать тестирование</MainButton>
            </Center>
        </Paper>
    );
};
