import type { ReactNode } from 'react';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import { createStore, sample } from 'effector';

import { type Content, getFreeResultQuery } from '@/entities/PersonalityTypes';
import { normalizeData } from '@/shared/utils/report/normalizeData';

export const $currentContent = createStore<{ content: Content['content']; title: string }[]>([]);

export const $navigationIconMap = createStore<Record<string, ReactNode>>({
    Введение: <Heart size={20} />,
    'Ваш психологический портрет': <Heart size={20} />,
    'Ключевые черты вашего характера': <Heart size={20} />,
    'Как вы думаете и принимаете решения': <Heart size={20} />,
    'Ваш карьерный путь': <Heart size={20} />,
    'Сильные и слабые стороны': <Heart size={20} />,
    'Ваш стиль общения и взаимодействия с другими': <Heart size={20} />,
    'Ловушки вашего разума - как их распознать и преодолеть': <Heart size={20} />,
    'Как стресс влияет на ваши решения': <Heart size={20} />,
    'Как сохранить внутренний баланс и энергию': <Heart size={20} />,
    'Знаменитости, похожие на вас': <Heart size={20} />,
    'Как вы строите отношения с окружающими': <Heart size={20} />,
    'Личный план развития': <Heart size={20} />,
    Заключение: <Heart size={20} />,
});

sample({
    clock: getFreeResultQuery.finished.success,
    fn: ({ result }) => {
        if (!result) return [];
        return normalizeData(result);
    },
    target: $currentContent,
});
