import { ColorSchemeScript } from '@mantine/core';

import logoUrl from '@/app/assets/logo.svg';

export const HeadDefault = () => (
    <>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta name='description' content='Cognitive Lab' />
        <link rel='icon' href={logoUrl} />
        <ColorSchemeScript />
    </>
);
