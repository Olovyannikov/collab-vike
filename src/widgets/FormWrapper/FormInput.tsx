import { TextInput } from '@mantine/core';

import s from './FormWrapper.module.css';

export const FormInput = TextInput.withProps({
    classNames: s,
    size: 'md',
});
