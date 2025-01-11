import { createQuery } from '@farfetched/core';

import { createCommonRequestFx } from '@/shared/api';
import { API } from '@/shared/api/contants';

import { BlogPostByIdRequest, BlogPostsRequest } from './dto';

export const getBlogPostsQuery = createQuery({
    effect: createCommonRequestFx<void, BlogPostsRequest>(() => ({
        url: API.BLOG_POSTS,
    })),
});

export const getBlogPostByIdQuery = createQuery({
    effect: createCommonRequestFx<string, BlogPostByIdRequest>((id) => ({
        url: API.BLOG_POST_BY_ID(id),
    })),
});
