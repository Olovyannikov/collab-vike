import type { ReactNode } from 'react';
import { Image, Paper, Stack, Text, Title } from '@mantine/core';

import envelopeImage from '@/app/assets/icons/envelope.webp';

interface SubscriptionProps {
    title: string;
    text: string;
    subscriptionFormSlot?: ReactNode;
}

export const Subscription = ({ title, text, subscriptionFormSlot }: SubscriptionProps) => {
    return (
        <Paper bg='violet.0' px='md' py='xl' radius='lg' pos='relative'>
            <Image pos='absolute' top={5} right={33} w={84} h={84} src={envelopeImage} />
            <Stack>
                <Title order={5} fz={20} textWrap='balance' maw='50%'>
                    {title}
                </Title>
                <Text fz={18}>{text}</Text>
                {subscriptionFormSlot}
            </Stack>
        </Paper>
    );
};
