import { Blockquote } from '@mantine/core';

import { Paragraph } from '../Paragraph';

interface BlockquoteLineProps {
    text: string;
}

export const BlockquoteLine = ({ text }: BlockquoteLineProps) => {
    return (
        <Blockquote py='sm' px='md' color='violet.9' bg='transparent' icon={null}>
            <Paragraph fz={18} lh={1.4} text={text} />
        </Blockquote>
    );
};
