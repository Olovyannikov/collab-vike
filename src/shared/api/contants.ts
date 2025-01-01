import type { PersonalityType } from '@/shared/types/models';

export const API = {
    URL: import.meta.env.VITE_BASE_URL,
    PERSONALITY_TYPES: '/api/v1/surveys/personality-types',
    PERSONALITY_TYPE: (type: PersonalityType) => `/api/v1/surveys/personality-types/${type}`,
    SEND_FREE_EMAIL: '/api/v1/surveys/free-report/email',
    GET_REGULAR_PRICE: '/api/v1/payments/regular-price',
    GET_PROMO_PRICE: (promocode: string) => `/api/v1/payments/promo-code-price?promo_code=${promocode}`,
    PURCHASE_REPORT: '/api/v1/payments/purchase-report',
    SURVEYS_INFO: '/api/v1/surveys/info',
    FULL_REPORT: (id: string) => `/api/v1/surveys/full-reports/${id}`,
};
