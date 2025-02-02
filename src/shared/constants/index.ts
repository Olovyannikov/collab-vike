import type { PersonalityType } from '@/entities/Report';

export const TYPE_TO_COLOR_MAP: Record<PersonalityType, string> = {
    ISTJ: 'indigo',
    ISFJ: 'indigo',
    ESTJ: 'indigo',
    ESFJ: 'indigo',

    ISTP: 'yellow',
    ISFP: 'yellow',
    ESTP: 'yellow',
    ESFP: 'yellow',

    INFJ: 'green',
    INFP: 'green',
    ENFJ: 'green',
    ENFP: 'green',

    INTJ: 'violet',
    INTP: 'violet',
    ENTJ: 'violet',
    ENTP: 'violet',
};
