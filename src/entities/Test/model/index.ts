import { createApi, createStore } from 'effector';

const $currentPage = createStore(0);
const pageApi = createApi($currentPage, {
    inc: (page) => page + 1,
    dec: (page) => page - 1,
});

export const TestModel = {
    $currentPage,
    pageApi,
};
