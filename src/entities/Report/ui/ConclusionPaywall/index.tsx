import type { ReactNode } from 'react';
import { Image, Paper, Stack, Text, Title } from '@mantine/core';

import gemImage from '@/app/assets/icons/gem.webp';
import { PointsBlock } from '@/shared/ui';

interface ConclusionPaywallProps {
    text: string;
    title: string;
    points?: string[];
    buyButtonSlot?: ReactNode;
    extraContentSlot?: ReactNode;
}

export const ConclusionPaywall = ({ text, title, points, extraContentSlot, buyButtonSlot }: ConclusionPaywallProps) => {
    return (
        <Paper bg='violet.0' py='xl' px='md' pos='relative'>
            <Image src={gemImage} w={108} h={108} pos='absolute' top={-7} right={0} />
            <Stack gap='md'>
                <Title order={5} fz={20} textWrap='balance' maw='60%'>
                    {title}
                </Title>
                <Text fz={16}>{text}</Text>
                <PointsBlock points={points} />
                {buyButtonSlot}
                {extraContentSlot}
            </Stack>
        </Paper>
    );
};
