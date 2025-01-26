import { Box, Container, Space, Text } from '@mantine/core';

import { Banner, ConclusionPaywall } from '@/entities/Report';
import { BuyFullReportButton } from '@/features/BuyFullReportButton';
import { NavigateToFullStructureTemplate } from '@/features/NavigateToFullStructureTemplate';
import { BackButton, InnerContainer } from '@/shared/ui';
import { FULL_REPORT } from '@/widgets/FullReportStructure/constants';
import { Block } from '@/widgets/FullReportStructure/ui';

import s from './FullReportStructure.module.css';

const OPTIONS = {
    conclusion: {
        points: [
            'Глубокий анализ всех аспектов вашей личности.',
            'Индивидуальные рекомендации для развития и достижения целей.',
            'Полный набор стратегий для эффективного использования вашего потенциала.',
        ],
        title: 'Раскройте все грани своей личности',
        text: 'Получите полный отчет и разблокируйте доступ ко всем результатм включая:',
        buyButtonSlot: <BuyFullReportButton buttonText='Купить сейчас' />,
        extraContentSlot: <NavigateToFullStructureTemplate text='Пройти тест' link='/test' />,
    },
};

export const FullReportStructure = () => {
    return (
        <Container className={s.container}>
            <BackButton className={s.back} />
            <Banner title='Структура полной версии отчета' />

            <InnerContainer>
                <Box>
                    <Text className={s.text}>
                        Полный отчет теста по типу личности предоставляет глубокое понимание ваших личностных черт,
                        сильных сторон и зон роста, а также персонализированные рекомендации для улучшения
                        межличностного общения и карьерного развития. Это эффективный инструмент для самоанализа и
                        работы над собой, который экономит ваше время и помогает достичь большей гармонии в жизни.
                    </Text>
                    {FULL_REPORT.map((report) => (
                        <Block key={report.id} {...report} />
                    ))}
                </Box>
            </InnerContainer>
            <Space h={100} />
            <ConclusionPaywall {...OPTIONS.conclusion} />
        </Container>
    );
};
