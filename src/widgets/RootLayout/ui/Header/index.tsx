import { useEffect } from 'react';
import { Burger } from '@mantine/core';
import { useGate, useUnit } from 'effector-react';

import { PersonalitiesModel } from '@/entities/Personalities';
import { useIsMobile } from '@/shared/hooks';

import { RootLayoutModel } from '../../model';
import { HeaderNavigationItems } from '../HeaderNavigationItems';
import { Logo } from '../Logo';
import s from './Header.module.css';

export const Header = () => {
    const isMobile = useIsMobile();
    useGate(PersonalitiesModel.PersonalitiesGate);
    const { toggleMenu, isMenuOpened, closeAllMenuDrawers } = useUnit({
        toggleMenu: RootLayoutModel.menuToggle,
        isMenuOpened: RootLayoutModel.$isMenuOpened,
        closeAllMenuDrawers: RootLayoutModel.allMenuDrawerClosed,
    });

    useEffect(() => {
        if (isMobile) return;
        closeAllMenuDrawers();
    }, [isMobile]);

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <Logo />
                <HeaderNavigationItems />
                <Burger opened={isMenuOpened} onClick={toggleMenu} hiddenFrom='sm' size='sm' />
            </div>
        </header>
    );
};
