import { Image } from '@mantine/core';
import { useUnit } from 'effector-react';

import keyIconImage from '@/app/assets/icons/BuyIcon.webp';
import { useIsLarge } from '@/shared/hooks';
import { MainButton } from '@/shared/ui';

import { fullReportPurchased } from './model';

interface BuyFullReportButtonProps {
    buttonText?: string;
}

export const BuyFullReportButton = ({ buttonText = 'Купить полный отчет' }: BuyFullReportButtonProps) => {
    const isLarge = useIsLarge();

    const { onBuyFullReportHandler } = useUnit({
        onBuyFullReportHandler: fullReportPurchased,
    });

    return (
        <MainButton
            fullWidth
            size={isLarge ? 'lg' : 'md'}
            radius={isLarge ? 'md' : 'sm'}
            onClick={onBuyFullReportHandler}
            leftSection={<Image src={keyIconImage} w={20} h={20} />}
        >
            {buttonText}
        </MainButton>
    );
};
