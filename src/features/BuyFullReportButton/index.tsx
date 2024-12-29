import { Image } from '@mantine/core';
import { useUnit } from 'effector-react';

import keyIconImage from '@/app/assets/icons/BuyIcon.webp';
import { getFreeResultQuery } from '@/entities/PersonalityTypes';
import { useIsLarge } from '@/shared/hooks';
import { MainButton } from '@/shared/ui';

interface BuyFullReportButtonProps {
    buttonText?: string;
}

export const BuyFullReportButton = ({ buttonText = 'Купить полный отчет' }: BuyFullReportButtonProps) => {
    const isLarge = useIsLarge();

    const { mbti } = useUnit({
        mbti: getFreeResultQuery.$data,
    });

    return (
        <MainButton
            fullWidth
            component='a'
            size={isLarge ? 'lg' : 'md'}
            radius={isLarge ? 'md' : 'sm'}
            href={`/purchase-report?mbti=${mbti?.mbti_type}`}
            leftSection={<Image src={keyIconImage} w={20} h={20} />}
        >
            {buttonText}
        </MainButton>
    );
};
