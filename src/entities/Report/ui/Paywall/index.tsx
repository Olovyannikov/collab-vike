import { Stack } from '@mantine/core';
import { Key } from '@phosphor-icons/react/dist/ssr';

import { MainButton } from '@/shared/ui';

import { Points } from './Points';
import { Top } from './Top';

interface PaywallProps {
    points: string[];
    title: string;
    buttonText: string;
    onPaywallClick?: VoidFunction;
}

export const Paywall = ({ onPaywallClick, title, buttonText, points }: PaywallProps) => {
    return (
        <Stack gap='lg' align='center'>
            <Top title={title} />
            <Points points={points} />
            <MainButton size='md' radius='sm' fullWidth leftSection={<Key size={20} />} onClick={onPaywallClick}>
                {buttonText}
            </MainButton>
        </Stack>
    );
};
