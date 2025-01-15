import { PageLayout } from '@/widgets/PageLayout';
import { PersonalityTypes } from '@/widgets/PersonalityTypes';

export default function Page() {
    return (
        <PageLayout title='Типы личности'>
            <PersonalityTypes />
        </PageLayout>
    );
}
