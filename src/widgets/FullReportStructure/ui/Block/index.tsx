import type { ReactNode } from 'react';
import { Box, Button, Group, Text, Title } from '@mantine/core';

import { Paywall } from '@/entities/Report';
import { BuyFullReportButton } from '@/features/BuyFullReportButton';

import { FULL_REPORT } from '../../constants';
import s from './Block.module.css';

interface BlockProps {
    title?: string;
    text?: ReactNode;
    points?: string[];
}

export const Block = ({
    text = FULL_REPORT[0].text,
    title = FULL_REPORT[0].title,
    points = FULL_REPORT[0].points,
}: BlockProps) => {
    return (
        <Box className={s.box}>
            <Title className={s.title} order={3}>
                {title}
            </Title>
            <Text className={s.text}>{text}</Text>
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
