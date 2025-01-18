import { useUnit } from 'effector-react';

import { getBlogPostByIdQuery, Post } from '@/entities/Blog';
import { AdBanner } from '@/entities/Test';
import { MainButton } from '@/shared/ui';

export const CurrentPost = () => {
    const { data } = useUnit(getBlogPostByIdQuery);

    if (!data) return null;

    return (
        <Post
            post={data}
            bannerSlot={
                <AdBanner>
                    <MainButton size='md' radius='sm' component='a' href='/test'>
                        Пройти тест
                    </MainButton>
                </AdBanner>
            }
        />
    );
};
