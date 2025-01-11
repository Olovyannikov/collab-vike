import { BlogPosts } from '@/widgets/BlogPosts';
import { PageLayout } from '@/widgets/PageLayout';

export default function Page() {
    return (
        <PageLayout title='Блог'>
            <BlogPosts />
        </PageLayout>
    );
}
