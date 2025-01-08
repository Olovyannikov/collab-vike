import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
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
        svgr(),
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
