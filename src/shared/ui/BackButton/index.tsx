import { Button, ButtonProps } from '@mantine/core';
import { ArrowLeft } from '@phosphor-icons/react';

import { navigate } from '@/shared/utils/navigate';

type BackButtonProps = ButtonProps;

export const BackButton = ({ ...rest }: BackButtonProps) => {
    return (
        <Button {...rest} c='dark.7' variant='subtle' leftSection={<ArrowLeft />} component='a' onClick={navigate.back}>
            Назад
        </Button>
    );
};
