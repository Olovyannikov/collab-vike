import { Title, type TitleProps } from '@mantine/core';

import { useIsMedium } from '@/shared/hooks';

import s from './ReportHeader.module.css';

interface HeaderProps extends TitleProps {
    text: string;
}

export const Header = ({ text, c = 'violet.9', ...props }: HeaderProps) => {
    const isLarge = useIsMedium();

    return (
        <Title
            className={s.title}
            mt={c === 'black' ? 60 : 0}
            lh={1.1}
            order={5}
            fz={isLarge ? 32 : 18}
            c={c === 'primary' ? 'violet.9' : c}
            {...props}
        >
            {text}
        </Title>
    );
};
