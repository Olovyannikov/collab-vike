import { useEffect, useRef, useState } from 'react';
import { Flex, Paper, Radio, Stack, Text, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import clsx from 'clsx';

import { IconCheck } from '@/shared/ui';

import s from './SingleChoiceQuestion.module.css';

interface SingleChoiceQuestionProps {
    id: string;
    onChange: (props: { question: string; answer: { value: number }; index: number }) => void;
    index: number;
    text?: string;
    hint?: string;
}

export const SingleChoiceQuestion = ({ id, index, text, hint, onChange }: SingleChoiceQuestionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [val, setVal] = useState<null | string>(null);
    const [key, setKey] = useLocalStorage<
        {
            question: string;
            answer: { value: number };
        }[]
    >({
        key: '$values',
        defaultValue: [],
    });

    useEffect(() => {
        if (!val) return;

        const m = [...key];
        m[index] = {
            question: id,
            answer: { value: Number(val) },
        };

        setKey(m);

        onChange({
            question: id,
            answer: {
                value: Number(val),
            },
            index: index,
        });

        window.scrollBy(0, ref.current?.scrollHeight ?? 0);
    }, [val]);

    return (
        <Paper ref={ref} pb={60} maw={343} mx='auto' className={clsx(s.paper)}>
            <Title ta='center' order={4} mb='sm'>
                {text}
            </Title>
            <Text ta='center' lh='18px' mb='4xl'>
                {hint}
            </Text>
            <Stack gap='xs'>
                <Radio.Group name={id} value={String(key[index]?.answer.value) ?? String(val)} onChange={setVal}>
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
