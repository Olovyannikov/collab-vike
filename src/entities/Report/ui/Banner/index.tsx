import { Box, Paper, Title } from '@mantine/core';

import CloudIcon from '@/app/assets/icons/cloud.svg?react';
import SemiCircle from '@/app/assets/icons/semi-circle.svg?react';
import { useIsMedium } from '@/shared/hooks';

interface BannerProps {
    title: string;
}

export const Banner = ({ title }: BannerProps) => {
    const isMedium = useIsMedium();

    return (
        <Paper
            mb={60}
            bg='violet.1'
            pos='relative'
            p={isMedium ? 0 : 'sm'}
            pl={isMedium ? 153 : 0}
            py={isMedium ? 0 : 'md'}
            style={{ overflow: 'hidden' }}
            ta={isMedium ? 'left' : 'center'}
        >
            <Title pos='relative' style={{ zIndex: 1 }} py={isMedium ? 50 : 0}>
                {title}
            </Title>
            <Box visibleFrom='sm' pos='absolute' top={0} right={0} bottom={0} c='violet.2'>
                <CloudIcon width={474} height='100%' />
            </Box>
            <Box style={{ zIndex: 0 }} visibleFrom='xs' pos='absolute' top={0} left={0} bottom={0} c='violet.2'>
                <SemiCircle width={150} height='100%' />
            </Box>
        </Paper>
    );
};
