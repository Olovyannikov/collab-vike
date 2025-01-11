import type { ReactNode } from 'react';
import { Flex, Group, Image, Paper, Stack, Text, Title } from '@mantine/core';

import { MainButton } from '@/shared/ui';

import s from './AdBanner.module.css';

interface AdBannerProps {
    paySlot?: ReactNode;
}

export const AdBanner = ({ paySlot }: AdBannerProps) => {
    return (
        <Paper className={s.paper} pos='relative'>
            <Stack>
                <Group className={s.group}>
                    <Image className={s.image} src='/images/sparkles.webp' />
                    <Title className={s.title} fz={20}>
                        Узнайте свой тип личности
                    </Title>
                </Group>
                <Text className={s.text}>
                    Наш тест — это мощный инструмент для самопознания и развития, который позволит вам глубже понять
                    свои сильные стороны, определить области для роста и осознанно двигаться вперёд. Вы сами решаете,
                    как использовать полученные знания и рекомендации, чтобы раскрыть свой потенциал и достичь
                    поставленных целей.
                </Text>
                <Image
                    w={300}
                    h={340}
                    right={0}
                    bottom={0}
                    pos='absolute'
                    visibleFrom='lg'
                    className={s.image}
                    src='/images/men-temp_large.webp'
                />
                <Flex className={s.controls}>
                    <MainButton size='md' radius='sm' component='a' href='/test'>
                        Пройти тест
                    </MainButton>
                    {paySlot}
                </Flex>
            </Stack>
        </Paper>
    );
};
