import { Group, Text } from '@mantine/core';

import { NavigateToFullStructureTemplate } from '@/features/NavigateToFullStructureTemplate';

import s from './ShowFullReportStructure.module.css';

export const ShowFullReportStructure = () => {
    return (
        <Group className={s.group} my={80} justify='space-between'>
            <Text className={s.text}>Больше информации в полном отчете</Text>
            <NavigateToFullStructureTemplate />
        </Group>
    );
};
