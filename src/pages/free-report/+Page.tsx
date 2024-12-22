import { Box, Container } from '@mantine/core';
import { useUnit } from 'effector-react';

import { $freeResult } from '@/entities/PersonalityTypes';
import { $reportName } from '@/entities/Report';
import { SendReportEmail } from '@/features/SendReportEmail';
import { ContentResolver } from '@/widgets/ContentResolver';
import { ReportHeader } from '@/widgets/ReportHeader';
import { ReportNavigation } from '@/widgets/ReportNavigation';

export default function Page() {
    const { name, data } = useUnit({ name: $reportName, data: $freeResult });

    if (!data) return null;

    return (
        <Box component='section'>
            <Container mt='xs'>
                <ReportHeader name={name} type={data?.mbti_type} />
                <SendReportEmail />
                <ReportNavigation />
                <ContentResolver />
            </Container>
        </Box>
    );
}
