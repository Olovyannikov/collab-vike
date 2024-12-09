import { useCallback } from 'react';
import { ActionIcon, Flex, Group, Paper, Radio, Stack, Text, Title } from '@mantine/core';
import { ArrowsClockwise } from '@phosphor-icons/react';
import { useStep } from 'usehooks-ts';

import { PreparedAnswer } from '@/entities/Test/types';
import { IconCheck } from '@/shared/ui';

import type { QuestionsResponse } from '../../api/dto';
import s from './ScaleQuestion.module.css';

interface ScaleQuestionProps extends QuestionsResponse {
    onChange: (payload: PreparedAnswer) => void;
    page: number;
    value: string;
}

export const ScaleQuestion = ({ value, page, text, hint, rephrasing, id, onChange }: ScaleQuestionProps) => {
    const [currentStep, helpers] = useStep(3);
    const { canGoToNextStep, reset, goToNextStep } = helpers;

    const phrases = [
        {
            hint,
            text,
        },
        ...(rephrasing ?? []),
    ];

    const onRephrasingHandler = useCallback(() => (canGoToNextStep ? goToNextStep() : reset()), [canGoToNextStep]);

    return (
        <Paper>
            <Group mb='5xl' gap={0} align='start' wrap='nowrap'>
                <Stack gap='sm'>
                    <Title classNames={s} order={4}>
                        {phrases[currentStep - 1].text}
                    </Title>
                    <Text className={s.hint}>{phrases[currentStep - 1].hint}</Text>
                </Stack>
                <ActionIcon
                    onClick={onRephrasingHandler}
                    flex={1}
                    className={s.rephrase}
                    variant='transparent'
                    c='dark.6'
                    size='lg'
                >
                    <ArrowsClockwise weight='bold' size='22px' />
                </ActionIcon>
            </Group>
            <Stack gap='xs'>
                <Radio.Group
                    name={id}
                    value={value}
                    onChange={(e) => {
                        onChange({
                            question: id,
                            answer: {
                                value: Number(e),
                            },
                            index: page,
                        });
                    }}
                >
                    <Flex className={s.radioWrapper} justify='space-between'>
                        <Radio className={s.radioRoot} icon={IconCheck} size='50px' value='-3' />
                        <Radio className={s.radioRoot} icon={IconCheck} size='40px' value='-2' />
                        <Radio className={s.radioRoot} icon={IconCheck} size='30px' value='-1' />
                        <Radio className={s.radioRoot} icon={IconCheck} size='20px' value='0' />
                        <Radio className={s.radioRoot} icon={IconCheck} size='30px' value='1' />
                        <Radio className={s.radioRoot} icon={IconCheck} size='40px' value='2' />
                        <Radio className={s.radioRoot} icon={IconCheck} size='50px' value='3' />
                    </Flex>
                </Radio.Group>
                <Flex justify='space-between'>
                    <Text c='indigo.8' fw={700}>
                        Не согласен
                    </Text>
                    <Text c='lime.8' fw={700}>
                        Согласен
                    </Text>
                </Flex>
            </Stack>
        </Paper>
    );
};
