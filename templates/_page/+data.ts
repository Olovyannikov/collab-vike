import { allSettled, fork, serialize } from 'effector';
import type { PageContextServer } from 'vike/types';

export async function data(pageContext: PageContextServer) {
    const scope = fork();

    // await allSettled(, { scope });

    return {};
}
