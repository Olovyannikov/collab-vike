import { Flex, Group, Image, Title } from '@mantine/core';

import lockImage from '@/app/assets/icons/lock.webp';
import menLargeUrl from '@/app/assets/man-temp_large.webp';
import menUrl from '@/app/assets/men-temp.webp';
import { useIsLarge } from '@/shared/hooks';

export const Top = ({ title }: { title: string }) => {
    const isLarge = useIsLarge();

    return (
        <Flex
            w='100%'
            gap={isLarge ? 'lg' : 'xxs'}
            align={isLarge ? 'flex-start' : 'center'}
            direction={isLarge ? 'row-reverse' : 'row'}
            justify={isLarge ? 'flex-end' : 'space-between'}
        >
            <Group gap='xs'>
                <Image w={32} h={32} src={lockImage} />
                <Title fz={isLarge ? 32 : 20} textWrap='balance' maw={isLarge ? 'fit-content' : 175}>
                    {title}
                </Title>
            </Group>
            <Image src={isLarge ? menLargeUrl : menUrl} w={isLarge ? 351 : 126} h={isLarge ? 311 : 116} />
        </Flex>
    );
};
