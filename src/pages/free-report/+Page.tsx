import { Box, Container } from '@mantine/core';
import { useUnit } from 'effector-react';

import { $reportName, getFreeResultQuery } from '@/entities/Report';
import { SendReportEmail } from '@/features/SendReportEmail';
import { PageLoader } from '@/shared/ui';
import { ContentResolver } from '@/widgets/ContentResolver';
import { ReportHeader } from '@/widgets/ReportHeader';
import { ReportNavigation } from '@/widgets/ReportNavigation';

import { $isLoadingPage } from './+pageStarted';
import s from './FreeReportPage.module.css';

export default function Page() {
    const { data } = useUnit(getFreeResultQuery);
    const { name } = useUnit({ name: $reportName });
    const isLoading = useUnit($isLoadingPage);

    if (isLoading && !data) return <PageLoader />;
    if (!data) return null;

    return (
        <Box component='section'>
            <Container className={s.container}>
                <ReportHeader name={name} type={data?.mbti_type} />
                <SendReportEmail />
                <ReportNavigation />
                <ContentResolver />
            </Container>
        </Box>
    );
}
