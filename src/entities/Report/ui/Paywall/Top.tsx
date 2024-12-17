import { Group, Image, Title } from '@mantine/core';
import { Lock } from '@phosphor-icons/react/dist/ssr';

import menUrl from '@/app/assets/men-temp.png';

export const Top = ({ title }: { title: string }) => {
    return (
        <Group w='100%' gap='xxs' justify='space-between'>
            <Group gap='xs'>
                <Lock size={32} />
                <Title fz={20} textWrap='balance' maw={175}>
                    {title}
                </Title>
            </Group>
            <Image src={menUrl} w={126} />
        </Group>
    );
};
