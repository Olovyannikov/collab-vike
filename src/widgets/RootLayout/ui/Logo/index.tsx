import { Image } from '@mantine/core';

import logoUrl from '@/app/assets/cognitive-logo.svg';

import s from './Logo.module.css';

export const Logo = () => {
    return (
        <a className={s.logo} href='/'>
            <Image src={logoUrl} height={20} width={125} alt='Cognitive Lab логотип' />
        </a>
    );
};
