import { Element } from 'react-scroll';
import { Button, Stack, Title } from '@mantine/core';
import { useList, useUnit } from 'effector-react';
import { isNumber } from 'lodash-es';

import { $currentContent } from '@/entities/Report';
import { AdBanner } from '@/entities/Test';
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
    const content = useUnit($currentContent);

    const disabled = true;

    if (!content) return null;

    const render = useList($currentContent, {
        keys: [page],
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
                                <Stack gap='md'>{resolver(item.content, showPurchaseBanner)}</Stack>
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
                                <Stack gap='md'>{resolver(item.content)}</Stack>
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
                    <Button disabled={disabled} size='md' variant='outline' c='dark.7' color='dark.7'>
                        Купить сейчас
                    </Button>
                </AdBanner>
            )}
        </>
    );
};
