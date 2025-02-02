import { ComponentProps } from 'react';
import { Burger, Divider } from '@mantine/core';
import clsx from 'clsx';
import { useGate, useUnit } from 'effector-react';

import { PersonalitiesModel } from '@/entities/Personalities';

import { RootLayoutModel } from '../../model';
import { HeaderNavigationItems } from '../HeaderNavigationItems';
import { Logo } from '../Logo';
import s from './Header.module.css';

export const Header = ({ className }: ComponentProps<'header'>) => {
    useGate(PersonalitiesModel.PersonalitiesGate);
    const { toggleMenu, isMenuOpened } = useUnit({
        toggleMenu: RootLayoutModel.menuToggle,
        isMenuOpened: RootLayoutModel.$isMenuOpened,
    });

    return (
        <header className={clsx(className, s.header)}>
            <div>
                <div className={s.inner}>
                    <Logo />
                    <HeaderNavigationItems />
                    <Burger opened={isMenuOpened} onClick={toggleMenu} hiddenFrom='sm' size='sm' />
                </div>
            </div>

            <Divider visibleFrom='md' />
        </header>
    );
};
