import type { PropsWithChildren } from 'react';

import { Header } from './ui';

export const RootLayout = ({ children }: PropsWithChildren) => (
    <>
        <Header />
        <main id='page-content'>{children}</main>
    </>
);
