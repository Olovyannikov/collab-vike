export default {
    postcssGlobalData: {
        files: 'src/app/styles/general/mixins.css',
    },
    plugins: {
        'postcss-preset-mantine': {
            mixins: {
                'data-color': (_mixin, key = 0) => ({
                    [`&[data-color="violet"]`]: {
                        'background-color': `var(--mantine-color-violet-${key})`,
                    },
                    [`&[data-color="indigo"]`]: {
                        'background-color': `var(--mantine-color-indigo-${key})`,
                    },
                    [`&[data-color="green"]`]: {
                        'background-color': `var(--mantine-color-green-${key})`,
                    },
                    [`&[data-color="yellow"]`]: {
                        'background-color': `var(--mantine-color-yellow-${key})`,
                    },
                }),
                'text-data-color': (_mixin, key = 0) => ({
                    [`&[data-color="violet"]`]: {
                        color: `var(--mantine-color-violet-${key})`,
                    },
                    [`&[data-color="indigo"]`]: {
                        color: `var(--mantine-color-indigo-${key})`,
                    },
                    [`&[data-color="green"]`]: {
                        color: `var(--mantine-color-green-${key})`,
                    },
                    [`&[data-color="yellow"]`]: {
                        color: `var(--mantine-color-yellow-${key})`,
                    },
                }),
            },
        },
        'postcss-simple-vars': {
            variables: {
                'mantine-breakpoint-xs': '36em',
                'mantine-breakpoint-sm': '48em',
                'mantine-breakpoint-md': '62em',
                'mantine-breakpoint-lg': '75em',
                'mantine-breakpoint-xl': '88em',
            },
        },
    },
};
