import { Image } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getFreeResultQuery } from '@/entities/Report';
import { TestStores } from '@/entities/Test';
import { useIsLarge } from '@/shared/hooks';
import { MainButton } from '@/shared/ui';

interface BuyFullReportButtonProps {
    buttonText?: string;
}

export const BuyFullReportButton = ({ buttonText = 'Купить полный отчет' }: BuyFullReportButtonProps) => {
    const isLarge = useIsLarge();

    const { mbti, id } = useUnit({
        mbti: getFreeResultQuery.$data,
        id: TestStores.$surveyId,
    });

    return (
        <MainButton
            component='a'
            size={isLarge ? 'lg' : 'md'}
            radius={isLarge ? 'md' : 'sm'}
            leftSection={<Image src='/images/BuyIcon.webp' w={20} h={20} />}
            href={`/purchase-report?mbti=${mbti?.mbti_type}&survey_id=${id}`}
        >
            {buttonText}
        </MainButton>
    );
};
