import type { ReactNode } from 'react';
import { Image, Stack, Title } from '@mantine/core';
import Markdown from 'markdown-to-jsx';

import { InnerContainer } from '@/shared/ui';

import type { BlogPost } from '../../types';
import s from './Post.module.css';

interface PostProps {
    post: BlogPost;
    bannerSlot?: ReactNode;
}

export const Post = ({ post, bannerSlot }: PostProps) => {
    return (
        <Stack align='flex-start'>
            <Image className={s.image} src={post.image} alt='post' />
            <InnerContainer style={{ overflow: 'hidden' }} w='100%'>
                <Title>{post.title}</Title>
                <Markdown>{post.body.data}</Markdown>
            </InnerContainer>
            {bannerSlot}
        </Stack>
    );
};
