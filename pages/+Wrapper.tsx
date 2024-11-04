import type { ReactNode } from 'react';

import { MantineProvider } from '@/app/providers/Mantine';
import { EffectorProvider, ScopeProvider } from '@/shared/utils/effector';

import '@/app/styles/index.css';

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <MantineProvider>
            <ScopeProvider>
                <EffectorProvider>{children}</EffectorProvider>
            </ScopeProvider>
        </MantineProvider>
    );
}
