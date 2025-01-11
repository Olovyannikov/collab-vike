import { useUnit } from 'effector-react';

import { getBlogPostByIdQuery, Post } from '@/entities/Blog';
import { AdBanner } from '@/entities/Test';

export const CurrentPost = () => {
    const { data } = useUnit(getBlogPostByIdQuery);

    if (!data) return null;

    return <Post post={data} bannerSlot={<AdBanner />} />;
};
