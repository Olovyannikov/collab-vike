import { createStore } from 'effector';

import { submitAnswersMutation } from '../api';
import { QuestionsResponse } from '../api/dto';
import { Answers, PreparedAnswer } from '../types';

const $surveyId = createStore<string | null>(null);
const $preparedQuestions = createStore<QuestionsResponse[] | null>(null);

const $currentPage = createStore<number>(1);
const $currentQuestion = createStore<QuestionsResponse | null>(null);
const $scaleForm = createStore<Answers>({
    answers: [],
});
const $currentValue = createStore<PreparedAnswer['answer'] | null>(null);
const $currentProgress = createStore(0);

const $isSubmitModalShown = createStore(false);

const $isLoadingState = submitAnswersMutation.$pending;

export const TestStores = {
    $currentPage,
    $currentValue,
    $currentQuestion,
    $preparedQuestions,
    $isLoadingState,
    $scaleForm,
    $isSubmitModalShown,
    $currentProgress,
    $surveyId,
};
