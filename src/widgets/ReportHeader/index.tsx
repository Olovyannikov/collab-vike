import { Image, Paper, Stack, Text, Title } from '@mantine/core';

import circleImage from '@/app/assets/circle.svg';
import circleSmallImage from '@/app/assets/circle_small.svg';
import { useIsLarge } from '@/shared/hooks';
import type { PersonalityType } from '@/shared/types/models';

import s from './ReportHeader.module.css';

interface ReportHeaderProps {
    name: string;
    type: PersonalityType;
}

export const ReportHeader = ({ name, type }: ReportHeaderProps) => {
    const isLarge = useIsLarge();

    return (
        <Paper className={s.paper}>
            <Stack className={s.stack}>
                <Text className={s.personalityType}>Ваш тип личности</Text>
                <Title className={s.name}>{name}</Title>
                <Text className={s.type}>{type}</Text>
            </Stack>
            <Image className={s.image} src={isLarge ? circleImage : circleSmallImage} />
        </Paper>
    );
};
