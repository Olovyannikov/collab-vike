import { List, ListProps, Text } from '@mantine/core';

import { useIsLarge } from '@/shared/hooks';

import type { ListItem } from '../../types';
import s from './FilledBulletList.module.css';

interface FilledBulletListProps extends ListProps {
    items?: ListItem[];
}

export const FilledBulletList = ({ items, ...props }: FilledBulletListProps) => {
    const isLarge = useIsLarge();

    return (
        <List data-type='Filled Bullet List' classNames={s} {...props}>
            {items?.map((item) => (
                <List.Item hidden={!item.text && !item.title} key={`${item.type}_${item.title}`} mb='md'>
                    <Text
                        span={item.text?.startsWith(' — ') || item.title?.endsWith(': ')}
                        fz={isLarge ? 22 : 18}
                        lh='21px'
                    >
                        {item.title}
                    </Text>
                    <Text span c='dark.7' fz={isLarge ? 22 : 18} lh='21px'>
                        {item.text}
                    </Text>
                </List.Item>
            ))}
        </List>
    );
};
