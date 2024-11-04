export interface CommentsResponse {
    id: string;
    name: string;
    text: string;
    rate: number;
}

export interface CreateCommentRequest {
    name: string;
    text: string;
    rate: number;
}
