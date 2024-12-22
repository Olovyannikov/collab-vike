import type { ReactNode } from 'react';
import { Group, Image, Paper, Stack, Text, Title } from '@mantine/core';

import gemImage from '@/app/assets/icons/gem.webp';
import sparklesImage from '@/app/assets/icons/sparkles.webp';
import { useIsLarge } from '@/shared/hooks';
import { PointsBlock } from '@/shared/ui';

interface ConclusionPaywallProps {
    text: string;
    title: string;
    points?: string[];
    buyButtonSlot?: ReactNode;
    extraContentSlot?: ReactNode;
}

export const ConclusionPaywall = ({ text, title, points, extraContentSlot, buyButtonSlot }: ConclusionPaywallProps) => {
    const isLarge = useIsLarge();

    return (
        <Paper
            bg='violet.0'
            pos='relative'
            py={isLarge ? '3xl' : 'xl'}
            px={isLarge ? '3xl' : 'md'}
            radius={isLarge ? 'lg' : 'md'}
        >
            <Image src={gemImage} w={isLarge ? 250 : 108} h={isLarge ? 250 : 108} pos='absolute' top={-7} right={0} />
            <Stack gap={isLarge ? 'lg' : 'md'}>
                <Title order={5} fz={isLarge ? 32 : 20} textWrap='balance' maw={isLarge ? '100%' : '60%'}>
                    <Group gap='xs'>
                        <Image visibleFrom='md' src={sparklesImage} w={48} h={48} />
                        {title}
                    </Group>
                </Title>
                <Text maw={isLarge ? 820 : '100%'} fz={isLarge ? 24 : 16}>
                    {text}
                </Text>
                <PointsBlock points={points} />
                <Group gap='sm' w={isLarge ? 'fit-content' : '100%'}>
                    {buyButtonSlot}
                    {extraContentSlot}
                </Group>
            </Stack>
        </Paper>
    );
};
