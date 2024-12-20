import type { PersonalityType } from '@/shared/types/models';

type ContentType =
    | 'paragraph'
    | 'blockquote_line'
    | 'bar_chart'
    | 'filled_bullet_list'
    | 'paywall'
    | 'header'
    | 'ordered_cards'
    | 'icon_list'
    | 'subscription'
    | 'title';

export interface ListItem {
    text: string;
    type: 'paragraph' | 'title_paragraph';
    title?: string;
    color?: 'primary' | 'secondary';
    order?: number;
    highlight?: null;
}

export interface Content {
    type: 'block';
    content: {
        color: string;
        text: string;
        type: ContentType;
        points: string[];
        title: string;
        button_text: string;
        items: ListItem[];
        mbti_percentages: Record<string, { negative: number; positive: number }>;
        mbti_data: Record<string, { text: string; type: 'header' | 'paragraph' }[]>;
    }[];
}

export interface FreeResult {
    title: string;
    mbti_type: PersonalityType;
    content: {
        title: string;
        content: Content[];
    }[];
}
