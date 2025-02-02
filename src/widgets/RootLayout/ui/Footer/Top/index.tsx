import { Box } from '@mantine/core';

import { OWNER_INFO } from '@/widgets/RootLayout/ui/Footer/const';
import { List } from '@/widgets/RootLayout/ui/Footer/List';

import { Logo } from '../../Logo';
import s from './Top.module.css';

export const Top = () => {
    return (
        <Box className={s.top}>
            <Logo />
            <p>Знание о себе - первый шаг к успеху</p>
            <List className={s.owner} data={OWNER_INFO} />
        </Box>
    );
};
