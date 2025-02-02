import { List, Stack, Title } from '@mantine/core';

import { resolver } from '@/shared/utils/report/resolver';

import type { ListItem } from '../../types';
import s from './OrderedList.module.css';

interface OrderedListProps {
    items: ListItem[];
    color?: string;
}

export const OrderedList = ({ items, color }: OrderedListProps) => {
    return (
        <List data-type='Ordered List' type='ordered' className={s.list} data-color={color}>
            {items?.map((item, index) => (
                <List.Item key={index}>
                    <Title data-color={color} mb='md' className={s.title}>
                        {item.title}
                    </Title>
                    <Stack gap='md'>{resolver(item.content)}</Stack>
                </List.Item>
            ))}
        </List>
    );
};
