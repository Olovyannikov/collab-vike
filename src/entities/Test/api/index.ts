import { createQuery } from '@farfetched/core';

import { createCommonRequestFx } from '@/shared/api';

import type { QuestionsResponse } from './dto';

export const getQuestionsQuery = createQuery({
    effect: createCommonRequestFx<void, QuestionsResponse[]>(() => ({
        url: `/api/v1/surveys/questions`,
    })),
    mapData: ({ result }) => {
        const resultArray = [];
        let nullOptionsGroup = [];

        // Проходим по каждому элементу исходного массива
        for (const item of result) {
            if (item.options === null) {
                // Если options равен null, добавляем элемент в группу
                nullOptionsGroup.push(item);
                // Если группа достигает 4 элементов, добавляем её в результирующий массив и обнуляем группу
                if (nullOptionsGroup.length === 4) {
                    resultArray.push(nullOptionsGroup);
                    nullOptionsGroup = [];
                }
            } else {
                // Если options не равен null и type не 'test', добавляем в отдельный массив
                if (item.type !== 'test') {
                    resultArray.push([item]);
                }
            }
        }

        // Если после завершения цикла остались элементы в группе, добавляем их в результирующий массив
        if (nullOptionsGroup.length > 0) {
            resultArray.push(nullOptionsGroup);
        }

        return resultArray;
    },
});
