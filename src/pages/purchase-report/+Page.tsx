import { Container, Image, Stack, Text, Title } from '@mantine/core';
import { useUnit } from 'effector-react';

import manImage from '@/app/assets/man-temp_large.webp';
import { getRegularPriceQuery } from '@/entities/Payment';
import { useIsLarge } from '@/shared/hooks';
import { BackButton } from '@/shared/ui/BackButton';

export default function Page() {
    const isLarge = useIsLarge();
    const { data } = useUnit(getRegularPriceQuery);

    return (
        <Container>
            <BackButton mt={isLarge ? '5xl' : 0} />
            <Stack gap='xs' align='center'>
                <Image src={manImage} w={185} h={178} flex='auto' style={{ objectPosition: 'top' }} />
                <Title mb='xxs' fz={20} ta='center' order={2}>
                    Полный отчет по вашему типу личности
                </Title>

                <Text hidden={!data} fz={28} fw={700}>
                    {data?.regular_price}{' '}
                    <Text fz={28} fw={700} span ff='system-ui'>
                        ₽
                    </Text>
                </Text>
            </Stack>
        </Container>
    );
}
