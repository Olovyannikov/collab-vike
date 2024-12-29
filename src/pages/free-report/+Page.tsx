import { Box, Container } from '@mantine/core';
import { useUnit } from 'effector-react';

import { $freeResult } from '@/entities/PersonalityTypes';
import { $reportName } from '@/entities/Report';
import { SendReportEmail } from '@/features/SendReportEmail';
import { PageLoader } from '@/shared/ui';
import { ContentResolver } from '@/widgets/ContentResolver';
import { ReportHeader } from '@/widgets/ReportHeader';
import { ReportNavigation } from '@/widgets/ReportNavigation';

import { $isLoadingPage } from './+pageStarted';

export default function Page() {
    const { name, data } = useUnit({ name: $reportName, data: $freeResult });
    const isLoading = useUnit($isLoadingPage);

    if (isLoading && !data) return <PageLoader />;
    if (!data) return null;

    return (
        <Box component='section' pb={800}>
            <Container mt='xs'>
                <ReportHeader name={name} type={data?.mbti_type} />
                <SendReportEmail />
                <ReportNavigation />
                <ContentResolver />
            </Container>
        </Box>
    );
}
