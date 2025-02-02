import { isValidElement, type MouseEvent, useCallback, useMemo } from 'react';
import { Group, Menu } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';
import { usePageContext } from 'vike-react/usePageContext';

import { useIsMobile } from '@/shared/hooks';
import { APP_ROUTES, type AppRoute } from '@/shared/navigation';

import { RootLayoutModel } from '../../model';
import s from './HeaderNavigationItems.module.css';

export const useHeaderNavigationItemsViewModel = () => {
    const isMobile = useIsMobile();
    const { onSubmenuToggle, closeAllMenuDrawers, setSubmenuBackTitle } = useUnit({
        closeAllMenuDrawers: RootLayoutModel.allMenuDrawerClosed,
        onSubmenuToggle: RootLayoutModel.subMenuToggle,
        setSubmenuBackTitle: RootLayoutModel.setSubMenuTitle,
    });
    const { urlPathname } = usePageContext();
    const isActive = ({ href }: { href: string }) =>
        href === '/' ? urlPathname === href : urlPathname.startsWith(href);

    const onMenuItemClickHandler = useCallback(
        (e: MouseEvent<HTMLAnchorElement>, link: AppRoute) => {
            if (!link.Component || !isValidElement(<link.Component />)) return closeAllMenuDrawers();

            if (isMobile) {
                e.stopPropagation();
                e.preventDefault();
                setSubmenuBackTitle(link.label);
                onSubmenuToggle();
            }
        },
        [isMobile]
    );

    const items = useMemo(
        () =>
            APP_ROUTES.filter((el) => !el.Component).map(({ link, label }) => {
                return (
                    <a
                        key={label}
                        className={s.link}
                        {...(isActive({ href: link }) ? { 'data-active': true } : { href: link })}
                    >
                        <Group>{label}</Group>
                    </a>
                );
            }),
        [isMobile, isActive]
    );

    const withChildrenItems = APP_ROUTES.filter((el) => el.Component).map((el) => (
        <Menu.Target key={el.label}>
            <div
                {...(!isMobile
                    ? { onMouseEnter: () => onSubmenuToggle(true), onMouseLeave: () => onSubmenuToggle(false) }
                    : {})}
            >
                <a href={el.link} className={s.link} onClick={(e) => onMenuItemClickHandler(e, el)}>
                    {el.label} <CaretDown size={16} weight='bold' />
                </a>
                {el.Component && (
                    <el.Component onClick={closeAllMenuDrawers} onClickBack={() => onSubmenuToggle(false)} />
                )}
            </div>
        </Menu.Target>
    ));

    return { items, withChildrenItems };
};
