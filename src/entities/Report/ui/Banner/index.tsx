import { Box, Paper, Title } from '@mantine/core';

import CloudIcon from '@/app/assets/icons/cloud.svg?react';
import SemiCircle from '@/app/assets/icons/semi-circle.svg?react';

import s from './Banner.module.css';

interface BannerProps {
    title: string;
    color?: string;
}

export const Banner = ({ title, color = 'violet' }: BannerProps) => {
    return (
        <Paper className={s.paper} data-color={color}>
            <Title className={s.title}>{title}</Title>
            <Box visibleFrom='sm' className={s.box} data-color={color}>
                <CloudIcon width={474} height='100%' />
            </Box>
            <Box visibleFrom='xs' className={s.box} data-color={color}>
                <SemiCircle width={150} height='100%' />
            </Box>
        </Paper>
    );
};
