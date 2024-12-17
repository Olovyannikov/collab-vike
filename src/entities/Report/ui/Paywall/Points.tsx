import { Group, Stack, Text } from '@mantine/core';
import { Check } from '@phosphor-icons/react/dist/ssr';

interface PointsProps {
    points: string[];
}

export const Points = ({ points }: PointsProps) => {
    return (
        <Stack>
            {points.map((item, index) => (
                <Group key={`${item}_${index}`} gap='xs'>
                    <Check color='var(--mantine-color-violet-9)' />
                    <Text flex={1} fz={16} lh='18px'>
                        {item}
                    </Text>
                </Group>
            ))}
        </Stack>
    );
};
