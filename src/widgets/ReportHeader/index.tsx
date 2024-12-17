import { Paper, RingProgress, Stack, Text, Title } from '@mantine/core';

import type { PersonalityType } from '@/shared/types/models';

interface ReportHeaderProps {
    name: string;
    type: PersonalityType;
}

export const ReportHeader = ({ name, type }: ReportHeaderProps) => {
    return (
        <Paper mb='3xl' bg='violet.1' pt='5xl' radius='5xl' pb={255} pos='relative' style={{ overflow: 'hidden' }}>
            <Stack ta='center' justify='center' gap='lg'>
                <Text fz={18}>Ваш тип личности</Text>
                <Title fz={32}>{name}</Title>
                <Text fz={18}>{type}</Text>
            </Stack>
            <RingProgress
                sections={[{ value: 100, color: 'violet.2' }]}
                thickness={86}
                size={500}
                pos='absolute'
                bottom={-86 + -32 * 4}
                right={-86 + -28}
            />
        </Paper>
    );
};
