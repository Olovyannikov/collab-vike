import type { PersonalityType } from '../api/dto';

export interface PersonalityTypesResponse {
    category: string;
    types: {
        code: PersonalityType;
        name: string;
        descriptions: string[];
    }[];
}
