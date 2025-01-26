import { sample } from 'effector';
import { createGate } from 'effector-react';

import { getPersonalityTypesWithCategoriesQuery } from '@/entities/Personalities';

const PersonalitiesGate = createGate();

sample({
    clock: PersonalitiesGate.open,
    target: getPersonalityTypesWithCategoriesQuery.start,
});

export const PersonalitiesModel = { PersonalitiesGate };
