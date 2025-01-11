import { Box } from '@mantine/core';
import { useUnit } from 'effector-react';

import { FAQList, getFAQQuery } from '@/entities/FAQ';

export const FAQUnits = () => {
    const { data } = useUnit(getFAQQuery);

    if (!data) return null;

    return (
        <Box mb={32}>
            <FAQList items={data?.payload} />
        </Box>
    );
};
