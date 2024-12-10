import { TextInput, TextInputProps } from '@mantine/core';

import s from './InputBorderless.module.css';

type InputBorderless = TextInputProps;

export const InputBorderless = ({ value, onChange }: InputBorderless) => (
    <TextInput autoFocus classNames={s} value={value} onChange={onChange} />
);
