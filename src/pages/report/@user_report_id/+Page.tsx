import { Box, Container } from '@mantine/core';

import { ContentResolver } from '@/widgets/ContentResolver';

export function Page() {
    return (
        <Box component='section' pb={800}>
            <Container mt='xs'>
                <ContentResolver isFree={false} />
            </Container>
        </Box>
    );
}
