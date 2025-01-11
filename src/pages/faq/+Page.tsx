import { Box, Container, Text, Title } from '@mantine/core';

import { FAQUnits } from '@/widgets/FAQUnits';

export default function Page() {
    return (
        <Box component='section' mt={80} pb={32}>
            <Container>
                <Title order={2} fz={56} mb={32} ta='center'>
                    Ответы на вопросы
                </Title>
                <FAQUnits />
                <Text ta='center' fz={20}>
                    Остались вопросы? Напишите нам в{' '}
                    <Text fz={20} component='a' href='/help' span c='blue.7'>
                        Службу поддержки
                    </Text>
                </Text>
            </Container>
        </Box>
    );
}
