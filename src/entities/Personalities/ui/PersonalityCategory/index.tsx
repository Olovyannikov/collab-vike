import { Box, Grid, Title } from '@mantine/core';

import { InnerContainer } from '@/shared/ui';

import { titleColorMap } from '../../constants';
import type { Personality } from '../../types';
import { PersonalityCard } from '../PersonalityCard';
import s from './PersonalityCategory.module.css';

interface PersonalityCategoryProps {
    title: string;
    types: Personality[];
}

export const PersonalityCategory = ({ title, types }: PersonalityCategoryProps) => {
    return (
        <Box>
            <Title className={s.title} data-color={titleColorMap[title]} order={3}>
                {title}
            </Title>
            <InnerContainer maw={1386}>
                <Grid gutter='5xl'>
                    {types.map((type) => (
                        <Grid.Col
                            key={type.code}
                            span={{
                                base: 12,
                                sm: 6,
                                lg: 3,
                            }}
                        >
                            <PersonalityCard
                                title={type.name}
                                type={type.code}
                                description={type.descriptions}
                                category={title}
                            />
                        </Grid.Col>
                    ))}
                </Grid>
            </InnerContainer>
        </Box>
    );
};
