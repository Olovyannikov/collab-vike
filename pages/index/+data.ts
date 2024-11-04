import { allSettled, fork } from 'effector';
import type { PageContextServer } from 'vike/types';

import { normalizeSSRData } from '@/shared/api/normalizer';

import { indexPage } from '~/pages/index/model';

export async function data(pageContext: PageContextServer) {
    const scope = fork();

    await allSettled(indexPage.open, { scope });

    const { data } = normalizeSSRData(scope);

    return data;
}
