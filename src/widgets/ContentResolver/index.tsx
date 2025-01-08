import { Element } from 'react-scroll';
import { Stack, Title } from '@mantine/core';
import { useList, useUnit } from 'effector-react';
import { isNumber } from 'lodash-es';

import { $currentContent } from '@/entities/Report';
import { useIsLarge } from '@/shared/hooks';
import { InnerContainer } from '@/shared/ui';

import s from './ContentResolver.module.css';
import { resolver } from './resolver';

interface ContentResolverProps {
    page?: number;
}

export const ContentResolver = ({ page }: ContentResolverProps) => {
    const isLarge = useIsLarge();
    const content = useUnit($currentContent);

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
                                <Title className={s.title}>{item.title}</Title>
                                <Stack gap='md'>{resolver(item.content)}</Stack>
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

    return <InnerContainer>{render}</InnerContainer>;
};
