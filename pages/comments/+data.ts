import { allSettled, fork, serialize } from 'effector';
import type { PageContextServer } from 'vike/types';

import { commentsPage } from '~/pages/comments/model';

export async function data(pageContext: PageContextServer) {
    const scope = fork();

    await allSettled(commentsPage.open, { scope });

    console.log({
        scope: serialize(scope),
    });

    return Object.values(serialize(scope)).find(Array.isArray);
}
