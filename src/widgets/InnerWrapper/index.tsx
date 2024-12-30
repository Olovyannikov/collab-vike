import type { PropsWithChildren, ReactNode } from 'react';
import { Box, Container, Image, Stack, Text, Title } from '@mantine/core';

import { BackButton, InnerContainer } from '@/shared/ui';

import s from './InnerWrapper.module.css';

interface InnerWrapperProps {
    image?: string;
    text?: ReactNode;
    title?: ReactNode;
    navigateTo?: string;
    backButtonText?: string;
}

export const InnerWrapper = ({
    children,
    backButtonText,
    navigateTo,
    image,
    title,
    text,
}: PropsWithChildren<InnerWrapperProps>) => {
    return (
        <Box component='section'>
            <Container pb='5xl'>
                <BackButton to={navigateTo} text={backButtonText} />
                <InnerContainer className={s.wrapper}>
                    <Image src={image} width={185} height={178} flex='auto' />
                    <Stack w='100%'>
                        <Title order={2} className={s.title} hidden={!title}>
                            {title}
                        </Title>
                        <Text className={s.text} hidden={!text}>
                            {text}
                        </Text>
                        {children}
                    </Stack>
                </InnerContainer>
            </Container>
        </Box>
    );
};
