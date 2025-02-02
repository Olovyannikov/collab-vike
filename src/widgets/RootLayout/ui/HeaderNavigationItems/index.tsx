import { Drawer, Group, Menu, Stack } from '@mantine/core';
import { X } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';

import { huge } from '@/shared/media';
import { MainButton } from '@/shared/ui';

import { RootLayoutModel } from '../../model';
import s from './HeaderNavigationItems.module.css';
import { useHeaderNavigationItemsViewModel } from './viewmodel';

export const HeaderNavigationItems = () => {
    const { isMenuOpened, isSubmenuOpened, closeAllMenuDrawers, isDesktop } = useUnit({
        isMenuOpened: RootLayoutModel.$isMenuOpened,
        isSubmenuOpened: RootLayoutModel.$isSubmenuOpened,
        closeAllMenuDrawers: RootLayoutModel.allMenuDrawerClosed,
        onMenuClosed: RootLayoutModel.menuToggle,
        isDesktop: huge.$matches,
    });
    const { items, withChildrenItems } = useHeaderNavigationItemsViewModel();

    return (
        <Menu
            offset={0}
            closeOnItemClick={false}
            opened={isSubmenuOpened}
            position='bottom-start'
            width={isDesktop ? 1084 : '100%'}
            trigger={isDesktop ? 'hover' : 'click'}
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
