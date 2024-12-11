import { createStore } from 'effector';
import { or } from 'patronum';

import { Answers, getFreeResultQuery, PreparedAnswer, QuestionsResponse, submitAnswersMutation } from '@/entities/Test';

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
