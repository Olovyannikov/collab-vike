import { isValidElement, type MouseEvent, useCallback, useMemo } from 'react';
import { Drawer, Group, Menu, Stack } from '@mantine/core';
import { CaretDown, X } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';
import { usePageContext } from 'vike-react/usePageContext';

import { useIsMobile } from '@/shared/hooks';
import { APP_ROUTES, type AppRoute } from '@/shared/navigation';
import { MainButton } from '@/shared/ui';

import { RootLayoutModel } from '../../model';
import s from './HeaderNavigationItems.module.css';

export const HeaderNavigationItems = () => {
    const isMobile = useIsMobile();
    const { urlPathname } = usePageContext();
    const { isMenuOpened, isSubmenuOpened, onSubmenuToggle, closeAllMenuDrawers, setSubmenuBackTitle } = useUnit({
        isMenuOpened: RootLayoutModel.$isMenuOpened,
        isSubmenuOpened: RootLayoutModel.$isSubmenuOpened,
        closeAllMenuDrawers: RootLayoutModel.allMenuDrawerClosed,
        onMenuClosed: RootLayoutModel.menuToggle,
        onSubmenuToggle: RootLayoutModel.subMenuToggle,
        setSubmenuBackTitle: RootLayoutModel.setSubMenuTitle,
    });

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
            APP_ROUTES.slice(1).map(({ link, label }) => {
                return (
                    <a
                        key={label}
                        href={link}
                        className={s.link}
                        {...(isActive({ href: link }) ? { 'data-active': true } : {})}
                    >
                        <Group>{label}</Group>
                    </a>
                );
            }),
        [isMobile]
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

    return (
        <Menu
            offset={0}
            closeOnItemClick={false}
            opened={isSubmenuOpened}
            position='bottom-start'
            width={isMobile ? '100%' : 1084}
            trigger={isMobile ? 'click' : 'hover'}
        >
            <Group component='nav' w='100%' gap={5} visibleFrom='sm'>
                {withChildrenItems}
                {items}
            </Group>
            <Drawer
                title={
                    <MainButton
                        size='md'
                        fullWidth
                        radius='md'
                        href='/test'
                        component='a'
                        onClick={closeAllMenuDrawers}
                    >
                        Пройти тест
                    </MainButton>
                }
                closeButtonProps={{
                    icon: <X size='32px' />,
                }}
                size='100%'
                hiddenFrom='sm'
                opened={isMenuOpened}
                onClose={closeAllMenuDrawers}
                className={s.drawer}
            >
                <Stack gap={5}>
                    {withChildrenItems}
                    {items}
                </Stack>
            </Drawer>
        </Menu>
    );
};
