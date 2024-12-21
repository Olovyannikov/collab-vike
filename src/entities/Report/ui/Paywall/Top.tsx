import { Group, Image, Title } from '@mantine/core';

import lockImage from '@/app/assets/icons/lock.webp';
import menUrl from '@/app/assets/men-temp.png';

export const Top = ({ title }: { title: string }) => {
    return (
        <Group w='100%' gap='xxs' justify='space-between'>
            <Group gap='xs'>
                <Image w={32} h={32} src={lockImage} />
                <Title fz={20} textWrap='balance' maw={175}>
                    {title}
                </Title>
            </Group>
            <Image src={menUrl} w={126} />
        </Group>
    );
};
