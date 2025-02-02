import { Image } from '@mantine/core';

import logoUrl from '@/app/assets/cognitive-logo.svg';

import s from './Logo.module.css';

interface LogoProps {
    width?: number;
    height?: number;
}

export const Logo = ({ width = 197, height = 32 }: LogoProps) => {
    return (
        <a className={s.logo} href='/'>
            <Image src={logoUrl} height={height} width={width} alt='Cognitive Lab логотип' />
        </a>
    );
};
