import React from 'react';
import { Text, TextProps } from '@mantine/core';

interface BoldTextProps extends TextProps {
    text: string;
    boldText?: string;
}

export const BoldText = (props: BoldTextProps) => {
    const { text, boldText, ...rest } = props;

    const parts = text?.replaceAll('**', '').split(boldText ?? '');

    return (
        <Text {...rest}>
            {parts?.map((part, index) => (
                <React.Fragment key={index}>
                    {part}
                    {index !== parts.length - 1 && (
                        <strong style={{ fontWeight: 'bold' }}>{boldText?.replaceAll('*', '')}</strong>
                    )}
                </React.Fragment>
            ))}
        </Text>
    );
};
