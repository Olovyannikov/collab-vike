import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import vercel from 'vite-plugin-vercel';

export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';

    return {
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
        css: {
            modules: {
                generateScopedName: isDev ? '[folder]__[local]__[hash:base64:5]' : '[hash:base64:5]',
            },
        },
        ssr: {
            noExternal: ['@siberiancancode/reactuse'],
        },
        resolve: {
            alias: {
                '~': fileURLToPath(new URL('./', import.meta.url)),
                '@': fileURLToPath(new URL('./src/', import.meta.url)),
            },
        },
    };
});
