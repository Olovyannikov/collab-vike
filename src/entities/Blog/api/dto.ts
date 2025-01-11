import type { BlogPost } from '../types';

export type BlogPostsRequest = {
    payload: BlogPost[];
};

export type BlogPostByIdRequest = BlogPost;
