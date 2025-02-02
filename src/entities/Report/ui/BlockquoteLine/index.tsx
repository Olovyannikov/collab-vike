import { Blockquote } from '@mantine/core';
import { useUnit } from 'effector-react';
import { usePageContext } from 'vike-react/usePageContext';

import { getFreeResultQuery, type PersonalityType } from '@/entities/Report';
import { TYPE_TO_COLOR_MAP } from '@/shared/constants';

import { Paragraph } from '../Paragraph';

interface BlockquoteLineProps {
    text?: string;
}

export const BlockquoteLine = ({ text }: BlockquoteLineProps) => {
    const { data } = useUnit(getFreeResultQuery);
    const {
        routeParams: { currentType },
    } = usePageContext();
    const currentColor = TYPE_TO_COLOR_MAP[data?.mbti_type ?? (currentType as PersonalityType)];

    return (
        <Blockquote py='sm' px='md' color={`${currentColor}.9`} bg='transparent' icon={null}>
            <Paragraph text={text ?? ''} />
        </Blockquote>
    );
};
