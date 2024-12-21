import type { ReactNode } from 'react';
import { Stack } from '@mantine/core';

import { PointsBlock } from '@/shared/ui';

import { Top } from './Top';

interface PaywallProps {
    points: string[];
    title: string;
    buttonText: string;
    buyButtonSlot?: ReactNode;
}

export const Paywall = ({ title, buyButtonSlot, points }: PaywallProps) => {
    return (
        <Stack gap='lg' align='center'>
            <Top title={title} />
            <PointsBlock points={points} />
            {buyButtonSlot}
        </Stack>
    );
};
