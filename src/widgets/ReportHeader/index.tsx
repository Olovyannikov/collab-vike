import { Image, Paper, Stack, Text, Title } from '@mantine/core';

import circleImage from '@/app/assets/circle.svg';
import circleSmallImage from '@/app/assets/circle_small.svg';
import type { PersonalityType } from '@/entities/Report';
import { useIsLarge } from '@/shared/hooks';

import s from './ReportHeader.module.css';

interface ReportHeaderProps {
    name: string;
    type: PersonalityType;
    showPreheader?: boolean;
}

export const ReportHeader = ({ name, type, showPreheader = true }: ReportHeaderProps) => {
    const isLarge = useIsLarge();

    return (
        <Paper className={s.paper}>
            <Stack className={s.stack}>
                <Text hidden={!showPreheader} className={s.personalityType}>
                    Ваш тип личности
                </Text>
                <Title className={s.name}>{name.split('—')[1]?.replaceAll('»', '').replaceAll('«', '')}</Title>
                <Text className={s.type}>{type}</Text>
            </Stack>
            <Image className={s.image} src={isLarge ? circleImage : circleSmallImage} />
        </Paper>
    );
};
