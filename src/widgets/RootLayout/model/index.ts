import type { ReactNode } from 'react';
import { createEvent, createStore, sample } from 'effector';
import { isBoolean } from 'lodash-es';

const subMenuToggle = createEvent<boolean | void>();
const setSubMenuChildren = createEvent<ReactNode>();
const setSubMenuTitle = createEvent<string>();
const menuToggle = createEvent<void>();
const allMenuDrawerClosed = createEvent();

const $isMenuOpened = createStore(false);
const $isSubmenuOpened = createStore(false);
const $subMenuTitle = createStore('');
const $subMenuChildren = createStore<ReactNode>(null);

sample({
    clock: subMenuToggle,
    source: $isSubmenuOpened,
    fn: (isSubmenuOpened, toggleValue) => {
        if (isBoolean(toggleValue)) return toggleValue;
        return !isSubmenuOpened;
    },
    target: $isSubmenuOpened,
});

sample({
    clock: setSubMenuTitle,
    source: $isSubmenuOpened,
    fn: (isSubmenuOpened, title) => {
        if (!isSubmenuOpened) return title;
        return '';
    },
    target: $subMenuTitle,
});

sample({
    clock: setSubMenuChildren,
    target: $subMenuChildren,
});

sample({
    clock: menuToggle,
    source: $isMenuOpened,
    fn: (isMenuOpened) => !isMenuOpened,
    target: $isMenuOpened,
});

sample({
    clock: allMenuDrawerClosed,
    fn: () => false,
    target: [$isMenuOpened, $isSubmenuOpened],
});

export const RootLayoutModel = {
    $isSubmenuOpened,
    subMenuToggle,
    $subMenuTitle,
    $subMenuChildren,
    setSubMenuChildren,
    setSubMenuTitle,
    menuToggle,
    $isMenuOpened,
    allMenuDrawerClosed,
};
