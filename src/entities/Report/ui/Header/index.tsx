import { Title, TitleProps } from '@mantine/core';

interface HeaderProps extends TitleProps {
    text: string;
}

export const Header = ({ text, c = 'violet.9', ...props }: HeaderProps) => {
    return (
        <Title c={c === 'primary' ? 'violet.9' : c} order={5} fz={18} mb={8} lh={1.1} {...props}>
            {text}
        </Title>
    );
};
