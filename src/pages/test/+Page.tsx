import { Box, Container } from '@mantine/core';

import { TestControls } from '@/features/TestControls';
import { SubmitTest } from '@/widgets/SubmitTest';
import { TestFlow } from '@/widgets/TestFlow';

export default function Page() {
    return (
        <Box component='section'>
            <Container display='grid' pb='5xl' h='calc(100dvh - 90px)'>
                <TestFlow />
                <TestControls />
                <SubmitTest />
            </Container>
        </Box>
    );
}
