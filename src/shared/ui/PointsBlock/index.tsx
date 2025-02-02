import type { CSSProperties } from 'react';
import { Group, Stack, Text } from '@mantine/core';
import { Check } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';
import { usePageContext } from 'vike-react/usePageContext';

import { getFreeResultQuery, PersonalityType } from '@/entities/Report';
import { TYPE_TO_COLOR_MAP } from '@/shared/constants';
import { useIsLarge } from '@/shared/hooks';

interface PointsBlockProps {
    points?: string[];
    position?: CSSProperties['position'];
}

export const PointsBlock = ({ points, position }: PointsBlockProps) => {
    const isLarge = useIsLarge();
    const { data } = useUnit(getFreeResultQuery);
    const {
        routeParams: { currentType },
    } = usePageContext();
    const currentColor = TYPE_TO_COLOR_MAP[data?.mbti_type ?? (currentType as PersonalityType)];
    if (!points || !points.length) return null;

    return (
        <Stack
            top={60}
            left={300}
            maw={isLarge ? 781 : 'fit-content'}
            pos={position || (isLarge ? 'absolute' : 'static')}
        >
            {points.map((item, index) => (
                <Group key={`${item}_${index}`} gap={isLarge ? 'sm' : 'xs'}>
                    <Check size={isLarge ? 24 : 16} weight='bold' color={`var(--mantine-color-${currentColor}-9)`} />
                    <Text flex={1} fz={isLarge ? 22 : 16} lh={isLarge ? '25px' : '18px'}>
                        {item}
                    </Text>
                </Group>
            ))}
        </Stack>
    );
};
