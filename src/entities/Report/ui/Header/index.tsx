import { Title, type TitleProps } from '@mantine/core';

import { useIsLarge } from '@/shared/hooks';

interface HeaderProps extends TitleProps {
    text: string;
}

export const Header = ({ text, c = 'violet.9', ...props }: HeaderProps) => {
    const isLarge = useIsLarge();

    console.log({ c });

    return (
        <Title
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
