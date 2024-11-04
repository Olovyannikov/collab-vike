import type { OnPageTransitionStartAsync } from 'vike/types';

export const onPageTransitionStart: OnPageTransitionStartAsync = async (pageContext) => {
    document.querySelector('body')?.classList.add('_page-is-transitioning');
    if (pageContext.isHydration) {
    }
};
