import { createEvent } from 'effector';

import { PreparedAnswer } from '@/entities/Test';

const scaleFormFieldChanged = createEvent<PreparedAnswer>();
const formPageChanged = createEvent<number>();
const submitScaleForm = createEvent();
const submitModalStateChanged = createEvent();

export const TestEvents = {
    scaleFormFieldChanged,
    formPageChanged,
    submitModalStateChanged,
    submitScaleForm,
};
