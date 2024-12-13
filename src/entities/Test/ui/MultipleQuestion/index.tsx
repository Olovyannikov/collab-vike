import { Checkbox, Paper, Stack } from '@mantine/core';

import { AnswerLabel } from '@/entities/Test/ui/AnswerLabel';
import { useIsLarge } from '@/shared/hooks';
import { IconCheck, InputBorderless } from '@/shared/ui';

import type { QuestionsResponse } from '../../api/dto';
import type { MultiChoiceAnswer } from '../../types';
import { useRephrasing } from '../../viewmodel';
import { QuestionTitle } from '../QuestionTitle';
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
    const { currentPhrase, onRephrasingHandler, phrases } = useRephrasing({ hint, text, rephrasing });
    const { localValues, input, setLocalValues, setInput } = useMultipleQuestionViewModel({
        onChange,
        options,
        value,
        page,
        id,
    });
    const showInput = options && value?.map((el) => el.value)?.includes(options[options?.length - 1].id);

    const isLarge = useIsLarge();

    return (
        <Paper mb='5xl'>
            <QuestionTitle
                phrases={phrases}
                text={currentPhrase.text}
                hint={currentPhrase.hint}
                onRephrasing={onRephrasingHandler}
            />
            <Stack gap='xs' className={s.wrap}>
                <Checkbox.Group
                    value={localValues.length ? localValues : (value?.map((v) => v.value) ?? localValues)}
                    onChange={setLocalValues}
                >
                    <Stack gap='lg' className={s.checkboxWrapper}>
                        {options?.map((option) => (
                            <Checkbox
                                size={isLarge ? '32px' : 'lg'}
                                radius='xs'
                                color='lime.8'
                                key={option.id}
                                label={<AnswerLabel>{option.text}</AnswerLabel>}
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
