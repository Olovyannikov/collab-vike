import { useEffect, useState } from 'react';
import { ActionIcon, Flex, Group, Paper, Radio, Stack, Text, Title, Transition } from '@mantine/core';
import { ArrowsClockwise } from '@phosphor-icons/react';

import type { PreparedAnswer } from '@/entities/Test';
import { useRephrasing } from '@/entities/Test/viewmodel';
import { useIsLarge } from '@/shared/hooks';
import { IconCheck } from '@/shared/ui';

import type { QuestionsResponse } from '../../api/dto';
import s from './ScaleQuestion.module.css';

interface ScaleQuestionProps extends QuestionsResponse {
    onChange: (payload: PreparedAnswer) => void;
    page: number;
    value: string;
}

export const ScaleQuestion = ({ value, page, text, hint, rephrasing, id, onChange }: ScaleQuestionProps) => {
    const [localValue, setLocalValue] = useState('');

    const isLarge = useIsLarge();
    const [mounted, setIsMounted] = useState(false);

    const { onRephrasingHandler, currentPhrase } = useRephrasing({
        hint,
        text,
        rephrasing,
    });

    useEffect(() => {
        setLocalValue('');
        setIsMounted(true);
    }, [page]);

    useEffect(() => {
        if (localValue !== '') {
            setIsMounted(false);
        }
    }, [localValue]);

    useEffect(() => {
        if (!localValue) return;

        onChange({
            question: id,
            answer: {
                value: Number(localValue),
            },
            index: page - 1,
        });
    }, [localValue]);

    return (
        <Transition mounted={mounted} transition='fade' enterDelay={500} exitDelay={300}>
            {(transition) => (
                <Paper className={s.wrapper} style={transition}>
                    <Group className={s.top} mb='5xl' gap={0} align='start' wrap='nowrap'>
                        <Stack gap='sm'>
                            <Title classNames={s} order={4}>
                                {currentPhrase.text}
                            </Title>
                            <Text className={s.hint}>{currentPhrase.hint}</Text>
                        </Stack>
                        <ActionIcon
                            onClick={onRephrasingHandler}
                            flex={1}
                            className={s.rephrase}
                            variant='transparent'
                            c='dark.6'
                            size='lg'
                        >
                            <ArrowsClockwise weight='regular' size={isLarge ? '32px' : '22px'} />
                        </ActionIcon>
                    </Group>
                    <Stack pos='relative' maw={1145} m='auto' gap='xs'>
                        <Radio.Group name={id} value={value ?? localValue} onChange={setLocalValue}>
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
                        <Flex className={s.agreedBlock} justify='space-between'>
                            <Text className={s.agreed} c='indigo.8' fw={700}>
                                Не согласен
                            </Text>
                            <Text className={s.agreed} c='lime.8' fw={700}>
                                Согласен
                            </Text>
                        </Flex>
                    </Stack>
                </Paper>
            )}
        </Transition>
    );
};
