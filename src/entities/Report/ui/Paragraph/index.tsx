import type { TextProps } from '@mantine/core';

import { BoldText } from '@/shared/ui';

import s from './Paragraph.module.css';

interface ParagraphProps extends TextProps {
    text: string;
}

const regex = /\*\*(.*?)\*\*/; // регулярное выражение для поиска текста между **

export const Paragraph = ({ text, ...rest }: ParagraphProps) => {
    const match = text?.match(regex);

    return <BoldText className={s.text} text={text} boldText={match ? match[1] : ''} {...rest} />;
};
