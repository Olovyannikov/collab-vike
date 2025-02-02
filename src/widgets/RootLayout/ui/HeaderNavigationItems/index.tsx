import { Drawer, Group, Menu, Stack } from '@mantine/core';
import { X } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';

import { useIsMobile } from '@/shared/hooks';
import { MainButton } from '@/shared/ui';

import { RootLayoutModel } from '../../model';
import s from './HeaderNavigationItems.module.css';
import { useHeaderNavigationItemsViewModel } from './viewmodel';

export const HeaderNavigationItems = () => {
    const isMobile = useIsMobile();
    const { isMenuOpened, isSubmenuOpened, closeAllMenuDrawers } = useUnit({
        isMenuOpened: RootLayoutModel.$isMenuOpened,
        isSubmenuOpened: RootLayoutModel.$isSubmenuOpened,
        closeAllMenuDrawers: RootLayoutModel.allMenuDrawerClosed,
        onMenuClosed: RootLayoutModel.menuToggle,
    });
    const { items, withChildrenItems } = useHeaderNavigationItemsViewModel();

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
                className={s.drawer}
                opened={isMenuOpened}
                onClose={closeAllMenuDrawers}
            >
                <Stack gap={5}>
                    {withChildrenItems}
                    {items}
                </Stack>
            </Drawer>
        </Menu>
    );
};
