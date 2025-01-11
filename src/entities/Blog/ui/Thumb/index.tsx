import { Button, Card, Flex, Grid, Image, Stack, Text, Title } from '@mantine/core';
import { ArrowRight } from '@phosphor-icons/react';
import clsx from 'clsx';
import Markdown from 'markdown-to-jsx';

import type { BlogPost } from '../../types';
import s from './Thumb.module.css';

interface ThumbProps {
    post: BlogPost;
}

export const Thumb = ({ post }: ThumbProps) => {
    return (
        <Grid.Col
            hidden={!post.show_on_main}
            span={{
                base: 12,
                lg: post.pinned ? 12 : 3,
            }}
        >
            <Card withBorder component='a' href={`/blog/${post.id}`}>
                <Flex className={clsx(s.card, post.pinned && s.row)} gap='md'>
                    <Image className={s.image} fit='cover' radius='xs' src={post.thumbnail_image} alt={post.title} />
                    <Stack className={s.preview} justify='center'>
                        <Title className={s.title}>{post.title}</Title>
                        <Text className={s.text} lineClamp={4}>
                            <Markdown
                                options={{
                                    overrides: {
                                        h1: (props) => (
                                            <Title order={1} className={s.title}>
                                                {props.children}
                                            </Title>
                                        ),
                                        h2: (props) => (
                                            <Title order={2} className={s.title}>
                                                {props.children}
                                            </Title>
                                        ),
                                        p: (props) => <Text className={s.text}>{props.children}</Text>,
                                    },
                                }}
                            >
                                {post.body.data}
                            </Markdown>
                        </Text>
                        <Button
                            c='dark.7'
                            component='a'
                            w='fit-content'
                            variant='subtle'
                            href={`/blog/${post.id}`}
                            rightSection={<ArrowRight />}
                        >
                            Читать
                        </Button>
                    </Stack>
                </Flex>
            </Card>
        </Grid.Col>
    );
};
