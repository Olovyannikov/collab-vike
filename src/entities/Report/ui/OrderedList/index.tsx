import { List, Stack, Title } from '@mantine/core';

import { resolver } from '@/shared/utils/report/resolver';

import type { ListItem } from '../../types';
import s from './OrderedList.module.css';

interface OrderedListProps {
    items: ListItem[];
}

export const OrderedList = ({ items }: OrderedListProps) => {
    return (
        <List type='ordered' className={s.list}>
            {items?.map((item, index) => (
                <List.Item key={index}>
                    <Title mb='md' className={s.title}>
                        {item.title}
                    </Title>
                    <Stack gap='md'>{resolver(item.content)}</Stack>
                </List.Item>
            ))}
        </List>
    );
};
