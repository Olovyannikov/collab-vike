import { ActionIcon, Checkbox, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { ArrowsClockwise } from '@phosphor-icons/react';

import { IconCheck, InputBorderless } from '@/shared/ui';

import type { QuestionsResponse } from '../../api/dto';
import type { MultiChoiceAnswer } from '../../types';
import { useRephrasing } from '../../viewmodel';
import s from './MultipleQuestion.module.css';
import { useMultipleQuestionViewModel } from './viewmodel';

interface MultipleQuestionProps extends QuestionsResponse {
    onChange: (payload: {
        question: string;
        answer: { input?: string; value: string }[];
        index: number;
        isMultiple: boolean;
    }) => void;
    page: number;
    value: MultiChoiceAnswer[] | null;
}

export const MultipleQuestion = ({
    options,
    value,
    page,
    text,
    hint,
    rephrasing,
    id,
    onChange,
}: MultipleQuestionProps) => {
    const { currentPhrase, onRephrasingHandler } = useRephrasing({ hint, text, rephrasing });
    const { localValues, input, setLocalValues, setInput } = useMultipleQuestionViewModel({
        onChange,
        options,
        value,
        page,
        id,
    });
    const showInput = options && value?.map((el) => el.value)?.includes(options[options?.length - 1].id);

    return (
        <Paper mb='5xl'>
            <Group mb='5xl' gap={0} align='start' wrap='nowrap'>
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
                    <ArrowsClockwise weight='bold' size='22px' />
                </ActionIcon>
            </Group>
            <Stack gap='xs'>
                <Checkbox.Group
                    value={localValues.length ? localValues : (value?.map((v) => v.value) ?? localValues)}
                    onChange={setLocalValues}
                >
                    <Stack gap='lg' className={s.wrapper}>
                        {options?.map((option) => (
                            <Checkbox
                                size='lg'
                                radius='xs'
                                color='lime.8'
                                key={option.id}
                                label={
                                    <Text fw={600} fz={16} lh={1.878}>
                                        {option.text}
                                    </Text>
                                }
                                value={option.id}
                                icon={IconCheck}
                            />
                        ))}
                    </Stack>
                </Checkbox.Group>
                {showInput && (
                    <InputBorderless
                        value={input.length > 0 ? input : value?.find((el) => el.input)?.input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                )}
            </Stack>
        </Paper>
    );
};
