import type { ReactNode } from 'react';
import { Box, Button, Group, Text, Title } from '@mantine/core';

import { Paywall } from '@/entities/Report';
import { BuyFullReportButton } from '@/features/BuyFullReportButton';

interface BlockProps {
    title?: string;
    text?: ReactNode;
    points?: string[];
}

export const Block = ({
    text = 'Ваш тип личности определяет уникальный стиль мышления, поведения и взаимодействия\n' +
        'с окружающим миром. В этом разделе вы получите общее представление о своём типе\n' +
        'личности в системе MBTI.',
    title = 'Описание типа личности по MBTI',
    points,
}: BlockProps) => {
    return (
        <Box mb={100}>
            <Title ta='center' fz={26} order={3} mb='md'>
                {title}
            </Title>
            <Text mb={60}>{text}</Text>
            <Paywall
                title='Больше о Вас в полном отчете'
                points={points}
                buyButtonSlot={
                    <Group>
                        <BuyFullReportButton buttonText='Купить сейчас' />
                        <Button
                            component='a'
                            href='/test'
                            radius='sm'
                            size='lg'
                            variant='outline'
                            c='dark.7'
                            color='dark.7'
                        >
                            Пройти тест
                        </Button>
                    </Group>
                }
            />
        </Box>
    );
};
