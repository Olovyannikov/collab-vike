import { type ReactNode, useEffect } from 'react';
import { allSettled } from 'effector';
import { Provider } from 'effector-react';
import { usePageContext } from 'vike-react/usePageContext';

import { useScope } from './ScopeProvider';

export const EffectorProvider = ({ children }: { children: ReactNode }) => {
    const pageContext = usePageContext();
    const scope = useScope();

    useEffect(() => {
        const firePageStarted = async () => {
            const { pageStarted } = pageContext.config;
            if (pageStarted) {
                await allSettled(pageStarted, { scope: scope!, params: pageContext });
            }
        };
        firePageStarted().catch(() => {
            throw new Error('Page start failed');
        });
    }, [pageContext]);

    return <Provider value={scope!}>{children}</Provider>;
};
