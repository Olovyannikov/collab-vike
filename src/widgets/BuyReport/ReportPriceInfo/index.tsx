import { Group, Skeleton, Stack, Text, Title } from '@mantine/core';
import { useUnit } from 'effector-react';
import { usePageContext } from 'vike-react/usePageContext';

import { getPriceWithPromocodeQuery, getRegularPriceQuery } from '@/entities/Payment';

import s from './ReportPriceInfo.module.css';

export const ReportPriceInfo = () => {
    const { data } = useUnit(getRegularPriceQuery);
    const { data: dataWithPromocode } = useUnit(getPriceWithPromocodeQuery);
    const {
        urlParsed: { search },
    } = usePageContext();

    const hasPrice = Boolean(data?.regular_price);
    const currentPrice = search.survey_id ? data?.regular_price : data?.skip_survey_price;
    const currentPromoPrice = search.survey_id
        ? dataWithPromocode?.regular_price.final
        : dataWithPromocode?.skip_survey_price.final;

    return (
        <Stack className={s.wrapper}>
            <Title className={s.title} order={2}>
                Полный отчет по вашему типу личности
            </Title>

            <Skeleton className={s.skeleton} hidden={hasPrice} radius='sm' />

            <Group gap='lg'>
                <Text
                    hidden={!data}
                    className={s.price}
                    td={currentPromoPrice ? 'line-through' : ''}
                    c={currentPromoPrice ? 'dark.0' : 'dark.7'}
                >
                    {currentPrice}{' '}
                    <Text className={s.price} span ff='system-ui'>
                        ₽
                    </Text>
                </Text>

                <Text hidden={!currentPromoPrice} className={s.price} c='violet.8'>
                    {currentPromoPrice}{' '}
                    <Text className={s.price} span ff='system-ui'>
                        ₽
                    </Text>
                </Text>
            </Group>
        </Stack>
    );
};
