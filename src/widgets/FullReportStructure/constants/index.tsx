import { Text } from '@mantine/core';

import { FilledBulletList } from '@/entities/Report';

export const FULL_REPORT = [
    {
        id: 0,
        text:
            'Ваш тип личности определяет уникальный стиль мышления, поведения и взаимодействия\n' +
            'с окружающим миром. В этом разделе вы получите общее представление о своём типе\n' +
            'личности в системе MBTI.',
        title: 'Описание типа личности по MBTI',
        points: [
            'Углублённое описание вашего типа личности с примерами проявлений в различных ситуациях',
            'Подробное объяснение влияния вашего типа на решения, отношения и взаимодействия с окружающими',
            'Рекомендации по эффективному использованию своих сильных сторон и преодолению возможных трудностей',
        ],
    },
    {
        id: 1,
        title: 'Результат по дихотомиям',
        text: (
            <>
                <Text fz={22} mb='md'>
                    Ваш тип личности формируется через сочетание четырёх дихотомий MBTI. Каждая дихотомия описывает
                    склонности в вашем восприятии и принятии решений.
                </Text>
                <FilledBulletList
                    items={[
                        {
                            title: 'Экстраверсия (E) vs. (I): ',
                            text: 'Ваш источник энергии и способ взаимодействия с окружающим миром.',
                        },
                        {
                            title: 'Интуиция (N) vs. Сенсорика (S): ',
                            text: 'способность видеть глубинные связи и прогнозировать будущее.',
                        },
                        {
                            title: 'Логика (T) vs. Чувства (F): ',
                            text: 'восприятие текущих возможностей и деталей окружающей среды.',
                        },
                        {
                            title: 'Суждение (J) vs. Восприятие (P): ',
                            text: 'внутренние ценности и эмоции, которые могут быть менее осознанными.',
                        },
                    ]}
                />
            </>
        ),
    },
    {
        id: 2,
        title: 'Когнитивные функции',
        text:
            'Когнитивные функции — это основы вашего мышления и восприятия, определяющие ваш\n' +
            'уникальный способ обработки информации и принятия решений.',
    },
    {
        id: 3,
        title: 'Ваш карьерный путь',
        text:
            'В этом разделе вы узнаете о карьерных направлениях, которые наиболее соответствуют\n' +
            'вашим личностным характеристикам и предпочтениям. Информация поможет вам\n' +
            'выбрать профессию, где вы сможете максимально реализовать свой потенциал.',
    },
    {
        id: 4,
        title: 'Сильные и слабые стороны',
        text:
            'Понимание своих сильных и слабых сторон помогает эффективно использовать свои\n' +
            'способности и работать над улучшением сложных аспектов.',
    },
    {
        id: 5,
        title: 'Когнитивные искажения и ловушки мышления',
        text:
            'Когнитивные искажения — это систематические ошибки в мышлении, которые могут\n' +
            'влиять на ваши решения и суждения.',
    },
    {
        id: 6,
        title: 'Поведение при стрессе',
        text:
            'Стрессовые ситуации могут вызывать определённые реакции, характерные для вашего\n' +
            'типа личности. Понимание этих реакций поможет вам лучше справляться с трудностями.',
    },
    {
        id: 7,
        title: 'Здоровье и благополучие',
        text:
            'Ваше физическое и психическое здоровье тесно связано с вашим типом личности. В этом\n' +
            'разделе вы узнаете, как поддерживать баланс между работой и отдыхом.',
    },
    {
        id: 8,
        title: 'Известные личности',
        text:
            'Многие известные люди разделяют ваш тип личности. Их примеры могут вдохновить вас\n' +
            'и помочь лучше понять свои собственные качества.',
    },
    {
        id: 9,
        title: 'Совместимость с другими типами личности',
        text:
            'Понимание взаимодействия с другими типами личности поможет вам улучшить\n' +
            'отношения и эффективнее коммуницировать в разных сферах жизни.',
    },
    {
        id: 10,
        title: 'Личный план развития',
        text:
            'Для достижения гармонии и успеха важно работать над собой, используя свои сильные\n' +
            'стороны и развивая новые навыки.',
    },
];
