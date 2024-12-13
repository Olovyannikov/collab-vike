import { useUnit } from 'effector-react';

import { SubmitTestModal, TestEvents, TestStores } from '@/entities/Test';

const { $currentQuestion, $isLoadingState, $isSubmitModalShown } = TestStores;
const { submitScaleForm, submitModalStateChanged } = TestEvents;

export const SubmitTest = () => {
    const { onSubmit, isOpen, controlModal, pending } = useUnit({
        question: $currentQuestion,
        onSubmit: submitScaleForm,
        isOpen: $isSubmitModalShown,
        controlModal: submitModalStateChanged,
        pending: $isLoadingState,
    });

    return <SubmitTestModal loading={pending} onSubmit={onSubmit} opened={isOpen} onClose={controlModal} />;
};
