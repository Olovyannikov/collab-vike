import { Title, TitleProps } from '@mantine/core';

import { useIsLarge } from '@/shared/hooks';

export const MainTitle = ({ children }: TitleProps) => {
    const isLarge = useIsLarge();

    return <Title fz={isLarge ? 24 : 20}>{children}</Title>;
};
