import { allSettled, fork, serialize } from 'effector';
import type { PageContextServer } from 'vike/types';

import { indexPage } from '~/pages/index/model';

export async function data(pageContext: PageContextServer) {
    const scope = fork();

    await allSettled(indexPage.open, { scope });

    return Object.values(serialize(scope)).find(Array.isArray);
}
