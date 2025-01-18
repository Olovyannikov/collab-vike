import type { CSSProperties } from 'react';
import { Group, Stack, Text } from '@mantine/core';
import { Check } from '@phosphor-icons/react/dist/ssr';

import { useIsLarge } from '@/shared/hooks';

interface PointsBlockProps {
    points?: string[];
    position?: CSSProperties['position'];
}

export const PointsBlock = ({ points, position }: PointsBlockProps) => {
    const isLarge = useIsLarge();

    if (!points || !points.length) return null;

    return (
        <Stack
            pos={position || (isLarge ? 'absolute' : 'static')}
            maw={isLarge ? 781 : 'fit-content'}
            left={300}
            top={60}
        >
            {points.map((item, index) => (
                <Group key={`${item}_${index}`} gap={isLarge ? 'sm' : 'xs'}>
                    <Check size={isLarge ? 24 : 16} weight='bold' color='var(--mantine-color-violet-9)' />
                    <Text flex={1} fz={isLarge ? 22 : 16} lh={isLarge ? '25px' : '18px'}>
                        {item}
                    </Text>
                </Group>
            ))}
        </Stack>
    );
};
