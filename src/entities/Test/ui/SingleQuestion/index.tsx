import { useEffect, useState } from 'react';
import { ActionIcon, Group, Paper, Radio, Stack, Text, Title } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { ArrowsClockwise } from '@phosphor-icons/react';
import { AnimatePresence } from 'framer-motion';

import { InputBorderless } from '@/shared/ui';

import type { QuestionsResponse } from '../../api/dto';
import type { SingleChoiceAnswer } from '../../types';
import { useRephrasing } from '../../viewmodel';
import s from './SingleQuestion.module.css';

interface SingleQuestionProps extends QuestionsResponse {
    onChange: (payload: {
        question: string;
        answer: { input?: string; value: string };
        index: number;
        isSingle: boolean;
    }) => void;
    page: number;
    value: SingleChoiceAnswer;
}

export const SingleQuestion = ({ options, value, page, text, hint, rephrasing, id, onChange }: SingleQuestionProps) => {
    const { currentPhrase, onRephrasingHandler, phrases } = useRephrasing({ hint, text, rephrasing });
    const [input, setInput] = useState('');
    const [localValue, setLocalValues] = useState<string>('');
    const [debounced] = useDebouncedValue(input, 200);

    const showInput = options?.find((el) => el.id === localValue)?.requires_input;

    useEffect(() => {
        if (value?.value) {
            setLocalValues(value.value);
        }

        if (value?.input) {
            setInput(value.input);
        }
    }, [value]);

    useEffect(() => {
        let obj: SingleChoiceAnswer = {} as SingleChoiceAnswer;

        if (!localValue) return;
        if (!options) return;

        if (showInput) {
            obj = {
                value: localValue,
                input: debounced,
            };
        } else {
            obj = {
                value: localValue,
            };
        }

        onChange({
            question: id,
            answer: obj,
            index: page - 1,
            isSingle: true,
        });
    }, [localValue, debounced, showInput]);

    return (
        <AnimatePresence>
            <Paper mb='5xl'>
                <Group mb='5xl' gap={0} align='start' wrap='nowrap'>
                    <Stack gap='sm'>
                        <Title classNames={s} order={4}>
                            {currentPhrase.text}
                        </Title>
                        <Text className={s.hint}>{currentPhrase.hint}</Text>
                    </Stack>
                    <ActionIcon
                        hidden={phrases.length < 2}
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
                    <Radio.Group name={id} value={localValue} onChange={setLocalValues}>
                        <Stack gap='lg' className={s.wrapper}>
                            {options?.map((option) => {
                                return (
                                    <Radio
                                        size='lg'
                                        color='lime.8'
                                        key={option.id}
                                        label={
                                            <Text fw={600} fz={16} lh={1.878}>
                                                {option.text}
                                            </Text>
                                        }
                                        value={option.id}
                                        checked={localValue === option.id}
                                    />
                                );
                            })}
                        </Stack>
                    </Radio.Group>
                    {showInput && (
                        <InputBorderless autoFocus value={input} onChange={(e) => setInput(e.target.value)} />
                    )}
                </Stack>
            </Paper>
        </AnimatePresence>
    );
};
