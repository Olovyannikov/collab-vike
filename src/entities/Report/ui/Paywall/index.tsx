import type { ReactNode } from 'react';
import { Box, Stack } from '@mantine/core';

import { useIsLarge } from '@/shared/hooks';
import { PointsBlock } from '@/shared/ui';

import { Top } from './Top';

interface PaywallProps {
    points: string[];
    title: string;
    buttonText: string;
    buyButtonSlot?: ReactNode;
}

export const Paywall = ({ title, buyButtonSlot, points }: PaywallProps) => {
    const isLarge = useIsLarge();

    return (
        <Stack gap='lg' align='center' pos='relative'>
            <Top title={title} />
            <PointsBlock points={points} />
            <Box
                left={316}
                bottom={-20}
                pos={isLarge ? 'absolute' : 'static'}
                maw={isLarge ? 'fit-content' : '100%'}
                display={isLarge ? 'block' : 'contents'}
            >
                {buyButtonSlot}
            </Box>
        </Stack>
    );
};
