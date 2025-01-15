import { Box, Image, Text, Title } from '@mantine/core';

import { titleColorMap } from '@/entities/Personalities/constants';

import type { PersonalityType } from '../../types';
import s from './PersonalityCard.module.css';

interface PersonalityCardProps {
    title: string;
    type: PersonalityType;
    description: string[];
    category: string;
}

export const PersonalityCard = ({ type, description, title, category }: PersonalityCardProps) => {
    return (
        <Box className={s.wrapper}>
            <Box className={s.imageWrapper} data-color={titleColorMap[category]}>
                <Image className={s.image} src='/images/category-man.webp' alt={title} />
            </Box>
            <Title className={s.title} order={3}>
                {title} ({type})
            </Title>
            <Text className={s.text}>{description[0]}</Text>
        </Box>
    );
};
