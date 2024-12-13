import { useEffect, useState } from 'react';
import { Paper, Radio, Stack } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';

import { AnswerLabel } from '@/entities/Test/ui/AnswerLabel';
import { QuestionTitle } from '@/entities/Test/ui/QuestionTitle';
import { useIsLarge } from '@/shared/hooks';
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

    const isLarge = useIsLarge();

    return (
        <Paper mb='5xl'>
            <QuestionTitle
                phrases={phrases}
                text={currentPhrase.text}
                hint={currentPhrase.hint}
                onRephrasing={onRephrasingHandler}
            />
            <Stack gap='xs' className={s.stack}>
                <Radio.Group name={id} value={localValue} onChange={setLocalValues}>
                    <Stack gap='lg' className={s.wrapper}>
                        {options?.map((option) => (
                            <Radio
                                color='lime.8'
                                key={option.id}
                                value={option.id}
                                size={isLarge ? 'xl' : 'lg'}
                                checked={localValue === option.id}
                                label={<AnswerLabel>{option.text}</AnswerLabel>}
                            />
                        ))}
                    </Stack>
                </Radio.Group>
                {showInput && <InputBorderless autoFocus value={input} onChange={(e) => setInput(e.target.value)} />}
            </Stack>
        </Paper>
    );
};
