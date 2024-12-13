import { createEvent } from 'effector';

import type { PreparedAnswer } from '../types';

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
