import { useForm } from '@mantine/form';
import { useUnit } from 'effector-react';

import { submitHelpForm } from './model';

export const useHelpFormViewModel = () => {
    const { submitFormHandler } = useUnit({
        submitFormHandler: submitHelpForm,
    });

    const form = useForm({
        mode: 'controlled',
        initialValues: {
            name: '',
            email: '',
            theme: '',
            question: '',
        },
        validate: {
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Неправильный email'),
            question: (value: string) => (value.length > 0 ? null : 'Введите ваш вопрос'),
        },
    });

    const nameProps = {
        label: 'Имя',
        placeholder: 'Как к Вам обращаться?',
        key: form.key('name'),
        ...form.getInputProps('name'),
    };

    const emailProps = {
        label: 'Электронная почта',
        placeholder: 'name@mail.ru',
        withAsterisk: true,
        key: form.key('email'),
        ...form.getInputProps('email'),
    };

    const themeProps = {
        label: 'Тема вопроса',
        placeholder: 'С чем связан вопрос?',
        key: form.key('theme'),
        ...form.getInputProps('theme'),
    };

    const questionProps = {
        label: 'Ваш вопрос',
        placeholder: 'Принимаем вопросы, замечания, предложения',
        withAsterisk: true,
        key: form.key('question'),
        ...form.getInputProps('question'),
    };

    const onSubmit = form.onSubmit((data) => {
        submitFormHandler(data);
    });

    return {
        nameProps,
        emailProps,
        themeProps,
        questionProps,
        onSubmit,
    };
};
