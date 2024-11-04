import { createMutation, createQuery } from '@farfetched/core';

import { createCommonRequestFx } from '@/shared/api';
import { HTTP_METHODS } from '@/shared/api/methods';

import { CommentsResponse, CreateCommentRequest } from './dto';

export const getCommentsQuery = createQuery({
    effect: createCommonRequestFx<void, CommentsResponse[]>(() => ({
        url: `/api/v1/surveys/comments`,
    })),
});

export const createCommentsMutation = createMutation({
    effect: createCommonRequestFx<CreateCommentRequest, void>((body) => ({
        url: '/api/v1/surveys/comments',
        method: HTTP_METHODS.POST,
        body,
    })),
});
