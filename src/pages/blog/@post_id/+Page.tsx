import { Box, Container } from '@mantine/core';

import { CurrentPost } from '@/widgets/CurrentPost';

export default function Page() {
    return (
        <Box mt={80} component='section'>
            <Container pb={80}>
                <CurrentPost />
            </Container>
        </Box>
    );
}
