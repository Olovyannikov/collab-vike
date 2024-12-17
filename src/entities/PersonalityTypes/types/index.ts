import type { PersonalityType } from '@/shared/types/models';

type ContentType =
    | 'paragraph'
    | 'blockquote_line'
    | 'bar_chart'
    | 'filled_bullet_list'
    | 'paywall'
    | 'header'
    | 'ordered_cards';

export interface BulletListItem {
    color: 'primary' | 'secondary';
    text: string;
    title: string;
    type: 'title_paragraph';
}

export interface Content {
    type: 'block';
    content: {
        text: string;
        type: ContentType;
        points: string[];
        title: string;
        button_text: string;
        items: BulletListItem[];
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
