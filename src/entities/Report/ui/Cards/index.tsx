import { Grid, Paper, Stack, Text, Title } from '@mantine/core';

import type { ListItem } from '@/entities/PersonalityTypes';

interface CardsProps {
    items: ListItem[];
}

export const Cards = ({ items }: CardsProps) => {
    return (
        <Grid grow>
            {items.map((item, index) => (
                <Grid.Col key={index} span={6}>
                    <Paper h='100%' radius={30} px='3xl' py={22} bg='violet.0'>
                        <Stack gap='xs'>
                            <Title c='violet.9' fz={24} order={4}>
                                {item.title}
                            </Title>
                            <Text fz={20}>{item.text}</Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
            ))}
        </Grid>
    );
};
