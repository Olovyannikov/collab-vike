import { Button, type ButtonProps } from '@mantine/core';
import { ArrowLeft } from '@phosphor-icons/react';

import { navigate } from '@/shared/utils/navigate';

import s from './BackButton.module.css';

type BackButtonProps = ButtonProps;

export const BackButton = ({ ...rest }: BackButtonProps) => {
    return (
        <Button
            {...rest}
            c='dark.7'
            component='a'
            variant='subtle'
            className={s.back}
            onClick={navigate.back}
            leftSection={<ArrowLeft />}
        >
            Назад
        </Button>
    );
};
