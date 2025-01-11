import { Grid } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getBlogPostsQuery, Thumb } from '@/entities/Blog';

export const BlogPosts = () => {
    const { data } = useUnit(getBlogPostsQuery);

    return <Grid>{data?.payload.map((post) => <Thumb key={post.id} post={post} />)}</Grid>;
};
