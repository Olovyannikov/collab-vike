import { Paper, Stack, Text, Title } from '@mantine/core';
import clsx from 'clsx';

import CircleImage from '@/app/assets/circle.svg?react';
import CircleSmallImage from '@/app/assets/circle_small.svg?react';
import type { PersonalityType } from '@/entities/Report';
import { TYPE_TO_COLOR_MAP } from '@/shared/constants';

import s from './ReportHeader.module.css';

interface ReportHeaderProps {
    name: string;
    type: PersonalityType;
    showPreheader?: boolean;
}

export const ReportHeader = ({ name, type, showPreheader = true }: ReportHeaderProps) => {
    const currentColor = TYPE_TO_COLOR_MAP[type];
    const currentName = name.split('—')[1]?.replaceAll('»', '').replaceAll('«', '');

    return (
        <Paper className={s.paper} data-color={currentColor}>
            <Stack className={s.stack}>
                <Text hidden={!showPreheader} className={s.personalityType}>
                    Ваш тип личности
                </Text>
                <Title className={s.name}>{currentName ?? name}</Title>
                <Text className={s.type}>{type}</Text>
            </Stack>
            <CircleImage data-color={currentColor} className={clsx(s.image, s.desktop)} />
            <CircleSmallImage data-color={currentColor} className={clsx(s.image, s.mobile)} />
        </Paper>
    );
};
