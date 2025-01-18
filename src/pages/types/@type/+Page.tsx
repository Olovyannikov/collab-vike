import { Box, Container } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getPersonalityTypeQuery } from '@/entities/Report';
import { InnerContainer } from '@/shared/ui';
import { ContentResolver } from '@/widgets/ContentResolver';
import { ReportHeader } from '@/widgets/ReportHeader';
import { ShowFullReportStructure } from '@/widgets/ShowFullReportStructure';

export default function Page() {
    const { data } = useUnit(getPersonalityTypeQuery);

    if (!data) return null;

    return (
        <Box component='section' mt={80}>
            <Container mt='xs'>
                <ReportHeader showPreheader={false} name={data.content[0].title} type={data.mbti_type} />

                <InnerContainer>
                    <ShowFullReportStructure />
                </InnerContainer>

                <Box pb={80}>
                    <ContentResolver showTitle={false} showPurchaseBanner />
                </Box>
            </Container>
        </Box>
    );
}
