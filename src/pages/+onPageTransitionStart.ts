import { nprogress } from '@mantine/nprogress';
import type { OnPageTransitionStartAsync } from 'vike/types';

export const onPageTransitionStart: OnPageTransitionStartAsync = async (pageContext) => {
    document.querySelector('body')?.classList.add('page-is-transitioning');
    nprogress.start();
};