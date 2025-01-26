import type { ComponentProps, ComponentType } from 'react';

import { PersonalityNavigation } from '@/entities/Personalities';

export interface AppRoute {
    link: `/${string}`;
    label: string;
    Component?: ComponentType<Props>;
}

interface Props extends ComponentProps<'div'> {
    onClick?: VoidFunction;
    onClickBack?: VoidFunction;
}

export const APP_ROUTES: AppRoute[] = [
    {
        link: '/types',
        label: 'Типы личности',
        Component: PersonalityNavigation,
    },
    { link: '/blog', label: 'Блог' },
    { link: '/faq', label: 'Ответы на вопросы' },
    { link: '/test', label: 'Пройти тест' },
];
