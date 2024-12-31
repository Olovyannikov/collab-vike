import type { ListItem } from '@/entities/PersonalityTypes';

export function isListItemArray(value: unknown): value is ListItem[] {
    return Array.isArray(value);
}
