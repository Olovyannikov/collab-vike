import { ActionIcon, Group, Stack, Text, Title } from '@mantine/core';
import { ArrowsClockwise } from '@phosphor-icons/react';

import { useIsLarge } from '@/shared/hooks';

import s from './QuestionTitle.module.css';

interface QuestionTitleProps {
    text: string;
    onRephrasing: VoidFunction;
    phrases: {
        text: string;
        hint?: string;
    }[];
    hint?: string;
}

export const QuestionTitle = ({ onRephrasing, text, hint, phrases }: QuestionTitleProps) => {
    const isLarge = useIsLarge();

    return (
        <Group className={s.wrapper} gap={0} align='start' wrap='nowrap'>
            <Stack gap='sm'>
                <Title classNames={s} order={4}>
                    {text}
                </Title>
                <Text className={s.hint}>{hint}</Text>
            </Stack>
            <ActionIcon
                hidden={phrases.length < 2}
                flex={isLarge ? 0 : 1}
                size='lg'
                c='dark.6'
                variant='transparent'
                className={s.rephrase}
                onClick={onRephrasing}
            >
                <ArrowsClockwise weight='bold' size='22px' />
            </ActionIcon>
        </Group>
    );
};
