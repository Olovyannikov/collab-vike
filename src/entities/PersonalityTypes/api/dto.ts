import { PersonalityType } from '@/shared/types/models';

export interface PersonalityTypesResponse {
    category: string;
    types: {
        code: PersonalityType;
        name: string;
        descriptions: string[];
    }[];
}
