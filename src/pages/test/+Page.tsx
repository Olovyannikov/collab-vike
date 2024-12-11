import { type ReactNode } from 'react';
import { Container } from '@mantine/core';
import { useUnit } from 'effector-react';
import { isArray } from 'lodash-es';

import {
    MultipleQuestion,
    ScaleQuestion,
    type SingleChoiceAnswer,
    SingleQuestion,
    SubmitTestModal,
    TestEvents,
    TestStores,
} from '@/entities/Test';
import { TestControls } from '@/features/TestControls';

const { $currentQuestion, $currentPage, $currentValue, $isLoadingState, $isSubmitModalShown } = TestStores;
const { scaleFormFieldChanged, submitScaleForm, submitModalStateChanged } = TestEvents;

export default function Page() {
    const { question, onChange, page, currentValue, onSubmit, isOpen, controlModal, pending } = useUnit({
        question: $currentQuestion,
        page: $currentPage,
        currentValue: $currentValue,
        onChange: scaleFormFieldChanged,
        onSubmit: submitScaleForm,
        isOpen: $isSubmitModalShown,
        controlModal: submitModalStateChanged,
        pending: $isLoadingState,
    });

    if (!question) return null;

    const Map: Record<string, ReactNode> = {
        scale: <ScaleQuestion {...question} value={String(currentValue)} page={page} onChange={onChange} />,
        multiple_choice: question.options && (
            <MultipleQuestion
                {...question}
                page={page}
                onChange={onChange}
                value={isArray(currentValue) ? currentValue : null}
            />
        ),
        single_choice: question.options && (
            <SingleQuestion {...question} page={page} onChange={onChange} value={currentValue as SingleChoiceAnswer} />
        ),
    };

    return (
        <Container display='grid' pb='5xl' h='calc(100dvh - 90px)'>
            {Map[question.type]}
            <TestControls />
            <SubmitTestModal loading={pending} onSubmit={onSubmit} opened={isOpen} onClose={controlModal} />
        </Container>
    );
}
