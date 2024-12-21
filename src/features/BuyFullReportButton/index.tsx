import { Image } from '@mantine/core';
import { useUnit } from 'effector-react';

import keyIconImage from '@/app/assets/icons/BuyIcon.png';
import { MainButton } from '@/shared/ui';

import { fullReportPurchased } from './model';

interface BuyFullReportButtonProps {
    buttonText?: string;
}

export const BuyFullReportButton = ({ buttonText = 'Купить полный отчет' }: BuyFullReportButtonProps) => {
    const { onBuyFullReportHandler } = useUnit({
        onBuyFullReportHandler: fullReportPurchased,
    });

    return (
        <MainButton
            size='md'
            radius='sm'
            fullWidth
            leftSection={<Image src={keyIconImage} w={20} h={20} />}
            onClick={onBuyFullReportHandler}
        >
            {buttonText}
        </MainButton>
    );
};
