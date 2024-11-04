import { Scope, serialize } from 'effector';

export const normalizeSSRData = (scope: Scope) => {
    const keys = Object.keys(serialize(scope))
        .filter((key) => key.includes('$'))
        .map((key) => key.split('$')[1]);

    const data = Object.entries(serialize(scope))
        .filter(([key]) => key.includes('$'))
        .map(([key, val]) => [[key.split('$')[1]], val]);

    return {
        keys,
        data: Object.fromEntries(data),
    };
};
