import type { PropsWithChildren } from 'react';
import { MantineProvider as Provider } from '@mantine/core';

import { theme } from './theme';

export function MantineProvider({ children }: PropsWithChildren) {
    return <Provider theme={theme}>{children}</Provider>;
}
