# Cognitive Lab

## Deploy

- Приложенька содержит SSR, а значит нам нужен сервачок на NodeJS ->
- ENV:
    - PORT (порт, на котором запускать приложеньку);
- Запускаем приложеньку командой для запуска в режиме прода: `npm run start`;
- Можно навертеть туда pm2 `pm2 start npm -- start`;

## Stack

- [ViteJS](https://vitejs.ru/);
- [VikeJS](https://vike.dev/);
- [ReactJS](https://react.dev/);
- [EffectorJS](https://effector.dev/);
- [Farfetched](https://ff.effector.dev/);
- [NodeJS]();
- [ExpressJS]();
- [MantineUI]();
- [ESLint]();
- [Prettier]();
- [PostCSS]();
- [FSD]();

## Development

### Старт

Приложение запускается на сервере NodeJS
Entry Point в приложение это файл - `express-entry.ts`;

### Структура проекта

Настоятельно рекомендую внимательно просмотреть каждый файл в этом репозитории перед использованием его в продакшене.

Этот проект наследует структуру проекта Vike:

```
dist/
public/
server/
src/
 --| pages/
```

- `dist` содержит результат сборки `npm`, это продовая сборка;
- `public` — каталог статических файлов (картинки, лого, шрифты итп);
- `server` — сервер Express, собирается с помощью `tsc`, запускается с помощью `ts-node`;
- `src` — основа FSD с кодом, импортированным в `pages`;
