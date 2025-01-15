import { Stack } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getPersonalityTypesWithCategoriesQuery, PersonalityCategory } from '@/entities/Personalities';

export const PersonalityTypes = () => {
    const { data } = useUnit(getPersonalityTypesWithCategoriesQuery);
    console.log({ data });
    return (
        <Stack>
            {data?.map((personalityType) => (
                <PersonalityCategory
                    key={personalityType.category}
                    title={personalityType.category}
                    types={personalityType.types}
                />
            ))}
        </Stack>
    );
};
