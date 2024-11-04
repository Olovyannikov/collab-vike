export interface Option {
    id: string;
    text: string;
    order: number;
    requires_input?: boolean;
}

export interface Rephrasing {
    hint: string;
    text: string;
}

export interface QuestionsResponse {
    id: string;
    category: string;
    dimension?: string;
    text: string;
    type: string;
    reverse_scored: boolean;
    hint?: string;
    rephrasing?: Rephrasing[];
    options?: Option[];
}
