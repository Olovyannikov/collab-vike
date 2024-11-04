import { fileURLToPath, URL } from 'node:url';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        vike({
            prerender: true,
        }),
        react({
            babel: {
                plugins: ['effector/babel-plugin'],
                babelrc: true,
            },
        }),
    ],
    ssr: {
        noExternal: ['efx-forms'],
    },
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),
            '@': fileURLToPath(new URL('./src/', import.meta.url)),
        },
    },
});
