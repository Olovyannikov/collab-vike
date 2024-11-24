import { Flex, Progress, Text } from '@mantine/core';

interface TestProgressProps {
    progress: number;
}

export const TestProgress = ({ progress }: TestProgressProps) => (
    <Flex gap='xl' align='center' pos='sticky' top={0} bg='white' py={12} style={{ zIndex: 100 }}>
        <Progress h={16} flex={1} color='violet.4' value={progress} />
        <Text fw={700} fz={16} c='dark.2'>
            {progress}%
        </Text>
    </Flex>
);
