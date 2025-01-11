import { Text } from '@mantine/core';

import { FAQUnits } from '@/widgets/FAQUnits';
import { PageLayout } from '@/widgets/PageLayout';

export default function Page() {
    return (
        <PageLayout title='Ответы на вопросы'>
            <FAQUnits />
            <Text ta='center' fz={20}>
                Остались вопросы? Напишите нам в{' '}
                <Text fz={20} component='a' href='/help' span c='blue.7'>
                    Службу поддержки
                </Text>
            </Text>
        </PageLayout>
    );
}
