import { Box, Container, Stack, Title } from '@mantine/core';
import { useUnit } from 'effector-react';

import { $freeResult } from '@/entities/PersonalityTypes';
import { $reportName } from '@/entities/Report';
import { SendReportEmail } from '@/features/SendReportEmail';
import { ContentResolver } from '@/widgets/ContentResolver';
import { ReportHeader } from '@/widgets/ReportHeader';

export default function Page() {
    const { name, data } = useUnit({ name: $reportName, data: $freeResult });

    console.log({ data });

    if (!data) return null;

    return (
        <Box component='section'>
            <Container mt='xs'>
                <ReportHeader name={name} type={data?.mbti_type} />
                <SendReportEmail />
                <Stack>
                    {data?.content.map((item) => {
                        console.log({ item });

                        return (
                            <Stack key={item.title}>
                                <Title fz={26}>{item.title}</Title>
                                <ContentResolver content={item.content.map((el) => el.content).flat()} />
                            </Stack>
                        );
                    })}
                </Stack>
            </Container>
        </Box>
    );
}
