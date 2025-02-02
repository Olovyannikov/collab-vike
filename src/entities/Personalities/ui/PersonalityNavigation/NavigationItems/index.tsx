import { Flex, Paper, Stack, Text } from '@mantine/core';

import { Personality } from '@/entities/Personalities/types';

import { titleColorMap } from '../../../constants';
import s from './NavigationItems.module.css';

interface NavigationItemsProps {
    items: Personality[];
    category: string;
    onClick?: VoidFunction;
}

export const NavigationItems = ({ items, onClick, category }: NavigationItemsProps) => {
    return (
        <Flex className={s.items} gap='md'>
            {items.map((type) => (
                <Paper
                    py='md'
                    px={32}
                    radius='md'
                    component='a'
                    key={type.code}
                    onClick={onClick}
                    className={s.paper}
                    href={`/types/${type.code}`}
                    data-color={`${titleColorMap[category]}`}
                >
                    <Stack gap='xs' align='center'>
                        <Text fw={500} fz={20}>
                            {type.name}
                        </Text>
                        <Text fz={16}>{type.code}</Text>
                    </Stack>
                </Paper>
            ))}
        </Flex>
    );
};
