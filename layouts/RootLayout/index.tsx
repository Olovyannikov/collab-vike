import type { PropsWithChildren } from 'react';

import { Header } from './ui';

export function RootLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <main id='page-content'>{children}</main>
        </>
    );
}
