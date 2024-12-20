import { Paper, Stack, Title } from '@mantine/core';

interface OrderedCardProps {
    color: string;
    items: {
        text?: string;
        highlight?: null;
        title?: string;
        order?: number;
    }[];
}

export const OrderedCards = ({ items, color }: OrderedCardProps) => {
    return (
        <Stack>
            {items.map((item) => (
                <Paper px='3xl' py='lg' bg={color === 'positive' ? 'green.0' : 'pink.0'} key={item.order}>
                    <Stack gap='xs'>
                        <Title c={color === 'positive' ? 'green.9' : 'pink.9'} order={5}>
                            {item.order}. {item.title}
                        </Title>
                    </Stack>
                </Paper>
            ))}
        </Stack>
    );
};
