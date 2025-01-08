import type { ListItem } from '@/entities/Report';

export function isListItemArray(value: unknown): value is ListItem[] {
    return Array.isArray(value);
}
