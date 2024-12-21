import { List, Text } from '@mantine/core';

import s from './FilledBulletList.module.css';

interface FilledBulletListProps {
    items: {
        text: string;
        type: 'title_paragraph' | 'paragraph';
        title?: string;
        color?: 'primary' | 'secondary';
    }[];
}

export const FilledBulletList = ({ items }: FilledBulletListProps) => {
    return (
        <List classNames={s} c='violet.9'>
            {items.map((item) => (
                <List.Item key={`${item.type}_${item.title}`} mb='md'>
                    <Text span={item.text.startsWith(' — ')} fz={18} lh='21px'>
                        {item.title}
                    </Text>
                    <Text span c='dark.7' fz={18} lh='21px'>
                        {item.text}
                    </Text>
                </List.Item>
            ))}
        </List>
    );
};
