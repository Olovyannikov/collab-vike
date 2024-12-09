import { type ForwardedRef, forwardRef } from 'react';
import { Stack } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getQuestionsQuery } from '@/entities/Test';

export const TestBlock = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    const { data: questions } = useUnit(getQuestionsQuery);

    if (!questions) return;

    return <Stack ref={ref}></Stack>;
});

TestBlock.displayName = 'TestBlock';
