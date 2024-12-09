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
    text: string;
    type: string;
    category: string;
    reverse_scored: boolean;
    hint?: string;
    dimension?: string;
    options?: Option[];
    rephrasing?: Rephrasing[];
}
