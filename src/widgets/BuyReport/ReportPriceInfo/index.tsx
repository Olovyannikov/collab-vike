import { Group, Skeleton, Stack, Text, Title } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getPriceWithPromocodeQuery, getRegularPriceQuery } from '@/entities/Payment';

import s from './ReportPriceInfo.module.css';

export const ReportPriceInfo = () => {
    const { data } = useUnit(getRegularPriceQuery);
    const { data: dataWithPromocode } = useUnit(getPriceWithPromocodeQuery);

    return (
        <Stack className={s.wrapper}>
            <Title className={s.title} order={2}>
                Полный отчет по вашему типу личности
            </Title>

            <Skeleton className={s.skeleton} hidden={Boolean(data?.regular_price)} radius='sm' />

            <Group gap='lg'>
                <Text
                    hidden={!data}
                    className={s.price}
                    td={dataWithPromocode?.discount ? 'line-through' : ''}
                    c={dataWithPromocode?.discount ? 'dark.0' : 'dark.7'}
                >
                    {data?.regular_price}{' '}
                    <Text className={s.price} span ff='system-ui'>
                        ₽
                    </Text>
                </Text>

                <Text hidden={!dataWithPromocode?.discount} className={s.price} c='violet.8'>
                    {dataWithPromocode?.final_price}{' '}
                    <Text className={s.price} span ff='system-ui'>
                        ₽
                    </Text>
                </Text>
            </Group>
        </Stack>
    );
};
