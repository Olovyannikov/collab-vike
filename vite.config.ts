import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';

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
        vercel(),
    ],
    ssr: {
        noExternal: ['@siberiancancode/reactuse'],
    },
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),
            '@': fileURLToPath(new URL('./src/', import.meta.url)),
        },
    },
});
