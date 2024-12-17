import type { PersonalityType } from '@/shared/types/models';

export const API = {
    URL: import.meta.env.VITE_BASE_URL,
    PERSONALITY_TYPES: '/api/v1/surveys/personality-types',
    PERSONALITY_TYPE: (type: PersonalityType) => `/api/v1/surveys/personality-types/${type}`,
    SEND_FREE_EMAIL: '/api/v1/surveys/free-report/email',
};
