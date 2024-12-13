import type { PropsWithChildren } from 'react';
import { Divider } from '@mantine/core';

import { Header } from './ui';

export const RootLayout = ({ children }: PropsWithChildren) => (
    <>
        <Header />
        <Divider />
        <main id='page-content'>{children}</main>
    </>
);
