export const APP_ROUTES = [
    { link: '/', label: 'Главная' },
    { link: '/comments', label: 'Комменты' },
];

export const pageTypes = APP_ROUTES.map((el) => (el.link === '/' ? 'index' : el.link.substring(1)));
