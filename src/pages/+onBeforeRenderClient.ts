import { allSettled } from 'effector';
import type { PageContextClient } from 'vike/types';

import { getScope } from '@/shared/utils/effector';

import { appService } from '../shared/services/app';

export const onBeforeRenderClient = async (pageContext: PageContextClient) => {
    const { scopeValues } = pageContext;
    const scope = getScope(scopeValues);

    if (pageContext.isHydration) {
        await allSettled(appService.appStarted, { scope });
    }
};
