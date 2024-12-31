import { Paper, Text } from '@mantine/core';

import s from './TextStrokeDash.module.css';

interface TextStrokeDashProps {
    text: string;
}

export const TextStrokeDash = ({ text }: TextStrokeDashProps) => {
    return (
        <Paper className={s.paper}>
            <Text fz={22}>{text}</Text>
        </Paper>
    );
};
