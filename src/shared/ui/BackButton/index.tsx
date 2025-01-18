import { Button, type ButtonProps } from '@mantine/core';
import { ArrowLeft } from '@phosphor-icons/react';
import clsx from 'clsx';
import { navigate } from 'vike/client/router';

import { navigate as customNavigate } from '@/shared/utils/navigate';

import s from './BackButton.module.css';

interface BackButtonProps extends ButtonProps {
    to?: string;
    text?: string;
}

export const BackButton = ({ to, className, text = 'Назад', ...rest }: BackButtonProps) => {
    return (
        <Button
            {...rest}
            c='dark.7'
            component='a'
            variant='subtle'
            className={clsx(s.back, className)}
            onClick={() => (to ? navigate(to) : customNavigate.back())}
            leftSection={<ArrowLeft />}
        >
            {text}
        </Button>
    );
};
