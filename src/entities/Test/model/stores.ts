import { createStore } from 'effector';
import { or } from 'patronum';

import { getFreeResultQuery, submitAnswersMutation } from '../api';
import { QuestionsResponse } from '../api/dto';
import { Answers, PreparedAnswer } from '../types';

const $preparedQuestions = createStore<QuestionsResponse[] | null>(null);

const $currentPage = createStore<number>(1);
const $currentQuestion = createStore<QuestionsResponse | null>(null);
const $scaleForm = createStore<Answers>({
    answers: [],
});
const $currentValue = createStore<PreparedAnswer['answer'] | null>(null);

const $isSubmitModalShown = createStore(false);

const $isLoadingState = or(getFreeResultQuery.$pending, submitAnswersMutation.$pending);

export const TestStores = {
    $currentPage,
    $currentValue,
    $currentQuestion,
    $preparedQuestions,
    $isLoadingState,
    $scaleForm,
    $isSubmitModalShown,
};
