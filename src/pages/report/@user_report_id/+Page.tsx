import { Box, Container } from '@mantine/core';
import { useUnit } from 'effector-react';

import {
    $contentCurrentPage,
    $currentContent,
    $currentName,
    $currentType,
    $isUserReportPageLoading,
    Banner,
} from '@/entities/Report';
import { PageLoader } from '@/shared/ui';
import { ContentResolver } from '@/widgets/ContentResolver';
import { PaidReportNavigation } from '@/widgets/PaidReportNavigation';
import { PaidReportPagination } from '@/widgets/PaidReportPagination';
import { ReportHeader } from '@/widgets/ReportHeader';

export function Page() {
    const { name, type, isLoading, currentContentPage, content } = useUnit({
        name: $currentName,
        type: $currentType,
        isLoading: $isUserReportPageLoading,
        currentContentPage: $contentCurrentPage,
        content: $currentContent,
    });

    const title = content[currentContentPage]?.title;

    if (isLoading || !name) return <PageLoader />;

    return (
        <Box component='section' pb={800} mt={80}>
            <Container mt='xs'>
                {currentContentPage === 0 && <ReportHeader name={name} type={type} />}
                {currentContentPage > 0 && <Banner title={title} />}
                <PaidReportNavigation />
                <ContentResolver page={currentContentPage} />
                <PaidReportPagination />
            </Container>
        </Box>
    );
}
