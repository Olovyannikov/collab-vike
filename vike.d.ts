/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />
/// <reference types="vite-plugin-svgr/client" />

import type { Scope } from 'effector';

declare global {
    interface Window {
        __VIKE_EFX_SCOPE?: Scope;
    }
}

declare module 'react' {
    // allow CSS custom properties
    interface CSSProperties {
        [varName: `--${string}`]: string | number | undefined;
    }
}

export {};
