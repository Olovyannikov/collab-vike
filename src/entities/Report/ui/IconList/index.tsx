import { List, Text, ThemeIcon } from '@mantine/core';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

import s from './IconList.module.css';

interface IconListProps {
    items: {
        text: string;
        type: 'paragraph' | 'title_paragraph';
    }[];
}

export const IconList = ({ items }: IconListProps) => {
    return (
        <List classNames={s}>
            {items.map((item) => (
                <List.Item
                    icon={
                        <ThemeIcon color='transparent' c='violet.9' size={24}>
                            <CheckCircle size={24} />
                        </ThemeIcon>
                    }
                    key={`${item.type}_${item.text}`}
                    mb='md'
                >
                    <Text fz={18} lh='21px'>
                        {item.text}
                    </Text>
                </List.Item>
            ))}
        </List>
    );
};