import { MantineProvider as Provider } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { theme } from './theme';

export const MantineProvider = ({ children }: PropsWithChildren) => <Provider theme={theme}>{children}</Provider>;
