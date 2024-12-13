import { Flex, Progress, Text } from '@mantine/core';

import { useIsLarge } from '@/shared/hooks';

import s from './TestProgress.module.css';

interface TestProgressProps {
    value: number;
}

export const TestProgress = ({ value }: TestProgressProps) => {
    const isLarge = useIsLarge();

    return (
        <Flex gap='xl' mt={isLarge ? 60 : 40} mb='lg' align='center' h='fit-content'>
            <Progress
                color='violet.4'
                size={isLarge ? 'xl' : 'lg'}
                className={s.progress}
                value={value}
                transitionDuration={200}
            />
            <Text c='dark.2' className={s.text}>
                {value}%
            </Text>
        </Flex>
    );
};
