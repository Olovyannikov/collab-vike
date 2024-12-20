import { List, Text } from '@mantine/core';

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
        <List c='violet.9'>
            {items.map((item) => (
                <List.Item key={`${item.type}_${item.title}`} mb='md'>
                    <Text fz={18} lh='21px'>
                        {item.title}
                    </Text>
                    <Text c='dark.7' fz={18} lh='21px'>
                        {item.text}
                    </Text>
                </List.Item>
            ))}
        </List>
    );
};
