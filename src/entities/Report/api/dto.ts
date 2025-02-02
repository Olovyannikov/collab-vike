import type { ContentResult } from '@/entities/Report';

export const PersonalityTypes = {
    ESTJ: 'ESTJ',
    ENTJ: 'ENTJ',
    ISTP: 'ISTP',
    INTP: 'INTP',
    ESFJ: 'ESFJ',
    ENFJ: 'ENFJ',
    INFP: 'INFP',
    ISFP: 'ISFP',
    ESTP: 'ESTP',
    ESFP: 'ESFP',
    ISFJ: 'ISFJ',
    ISTJ: 'ISTJ',
    ENFP: 'ENFP',
    ENTP: 'ENTP',
    INTJ: 'INTJ',
    INFJ: 'INFJ',
} as const;

export type PersonalityType = keyof typeof PersonalityTypes;

export type PersonalityResponse = ContentResult;
