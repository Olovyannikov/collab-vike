import { Element } from 'react-scroll';
import { Stack, Title } from '@mantine/core';
import { useList, useUnit } from 'effector-react';

import { $currentContent } from '@/entities/PersonalityTypes';
import { useIsLarge } from '@/shared/hooks';
import { InnerContainer } from '@/shared/ui';

import s from './ContentResolver.module.css';
import { resolver } from './resolver';

export const ContentResolver = () => {
    const isLarge = useIsLarge();
    const content = useUnit($currentContent);

    if (!content) return null;

    const render = useList($currentContent, (item, idx) => (
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
    ));

    return <InnerContainer>{render}</InnerContainer>;
};
