import { Title, TitleProps } from '@mantine/core';

import { useIsLarge } from '@/shared/hooks';

interface HeaderProps extends TitleProps {
    text: string;
}

export const Header = ({ text, c = 'violet.9', ...props }: HeaderProps) => {
    const isLarge = useIsLarge();

    return (
        <Title
            lh={1.1}
            order={5}
            fz={isLarge ? 24 : 18}
            mb={isLarge ? 'md' : 'xs'}
            c={c === 'primary' ? 'violet.9' : c}
            {...props}
        >
            {text}
        </Title>
    );
};
