export interface ScaleChoiceAnswer {
    value: number;
}

export interface Answer2 {
    value: string;
}

export interface Answer4 {
    value: string;
    input?: string;
}

export interface PreparedAnswer {
    question: string;
    answer: ScaleChoiceAnswer | Answer2 | Answer2[] | Answer4[];
    index: number;
}

export interface Answers {
    answers: PreparedAnswer[];
}
