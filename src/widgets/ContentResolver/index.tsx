import { Element } from 'react-scroll';
import { Button, Stack, Title } from '@mantine/core';
import { useList, useUnit } from 'effector-react';
import { isNumber } from 'lodash-es';
import { usePageContext } from 'vike-react/usePageContext';

import { $currentContent, $currentType, PersonalityType } from '@/entities/Report';
import { AdBanner } from '@/entities/Test';
import { TYPE_TO_COLOR_MAP } from '@/shared/constants';
import { useIsLarge } from '@/shared/hooks';
import { InnerContainer, MainButton } from '@/shared/ui';
import { resolver } from '@/shared/utils/report/resolver';

import s from './ContentResolver.module.css';

interface ContentResolverProps {
    page?: number;
    showTitle?: boolean;
    showPurchaseBanner?: boolean;
}

export const ContentResolver = ({ page, showTitle = true, showPurchaseBanner = false }: ContentResolverProps) => {
    const isLarge = useIsLarge();
    const {
        routeParams: { type },
    } = usePageContext();
    const content = useUnit($currentContent);
    const currentType = useUnit($currentType);

    const color = TYPE_TO_COLOR_MAP[(type as PersonalityType) ?? currentType];

    if (!content) return null;

    const render = useList($currentContent, {
        keys: [page, color],
        fn: (item, idx) => {
            if (page === undefined) {
                return (
                    <Stack id={item.title} gap='md' mb={isLarge ? 100 : 60} key={idx}>
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-expect-error mistypes */}
                        <Element name={item.title}>
                            <Stack>
                                <Title hidden={!showTitle} className={s.title}>
                                    {item.title}
                                </Title>
                                <Stack gap='md'>{resolver(item.content, color, showPurchaseBanner)}</Stack>
                            </Stack>
                        </Element>
                    </Stack>
                );
            }

            if (isNumber(page) && idx === page) {
                return (
                    <Stack id={item.title} gap='md' mb={isLarge ? 100 : 60} key={idx}>
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-expect-error mistypes */}
                        <Element name={item.title}>
                            <Stack>
                                <Title hidden={page !== undefined} className={s.title}>
                                    {item.title}
                                </Title>
                                <Stack gap='md'>{resolver(item.content, color)}</Stack>
                            </Stack>
                        </Element>
                    </Stack>
                );
            }
        },
    });

    return (
        <>
            <InnerContainer>{render}</InnerContainer>
            {showPurchaseBanner && (
                <AdBanner>
                    <MainButton size='md' radius='sm' component='a' href='/test'>
                        Пройти тест
                    </MainButton>
                    <Button
                        size='md'
                        c='dark.7'
                        component='a'
                        color='dark.7'
                        variant='outline'
                        href={`/purchase-report?mbti_type=${type}`}
                    >
                        Купить сейчас
                    </Button>
                </AdBanner>
            )}
        </>
    );
};
