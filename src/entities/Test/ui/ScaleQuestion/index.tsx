import { useEffect, useState } from 'react';
import { Flex, Paper, Radio, Stack, Text, Transition } from '@mantine/core';

import { useIsLarge } from '@/shared/hooks';

import type { QuestionsResponse } from '../../api/dto';
import { SCALE_RADIO_ITEMS } from '../../constants';
import type { PreparedAnswer } from '../../types';
import { useRephrasing } from '../../viewmodel';
import { QuestionTitle } from '../QuestionTitle';
import { RadioElement } from '../RadioElement';
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

    const { onRephrasingHandler, currentPhrase, phrases } = useRephrasing({
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
        <Transition mounted={mounted} transition='pop'>
            {(transition) => (
                <Paper className={s.wrapper} style={transition}>
                    <QuestionTitle
                        phrases={phrases}
                        text={currentPhrase.text}
                        hint={currentPhrase.hint}
                        onRephrasing={onRephrasingHandler}
                    />
                    <Stack pos='relative' maw={1145} m='auto' gap='xs'>
                        <Radio.Group
                            maw={isLarge ? 700 : '100%'}
                            m={isLarge ? 'auto' : 0}
                            name={id}
                            value={value ?? localValue}
                            onChange={setLocalValue}
                        >
                            <Flex gap={isLarge ? 50 : 0} className={s.radioWrapper} justify='space-between'>
                                {SCALE_RADIO_ITEMS.map((radio) => (
                                    <RadioElement key={radio.value} size={radio.size} value={radio.value} />
                                ))}
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
