import { useForm } from '@mantine/form';
import { useUnit } from 'effector-react';

import type { PurchasedReportRequest } from '@/entities/Payment';
import { getFreeResultQuery } from '@/entities/PersonalityTypes';
import { TestStores } from '@/entities/Test';

import { reportPurchased } from './model';

export const useReportBuyFormViewModel = () => {
    const { data } = useUnit(getFreeResultQuery);
    const surveyId = useUnit(TestStores.$surveyId);
    const purchaseReportHandler = useUnit(reportPurchased);

    const form = useForm({
        mode: 'controlled',
        initialValues: {
            email: '',
            mbti_type: surveyId ? '' : (data?.mbti_type ?? ''),
            promo_code: '',
            survey_result: surveyId ?? '',
        },
        validate: {
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Неправильный email'),
        },
    });

    const emailProps = {
        radius: 'xs',
        name: 'email',
        withAsterisk: true,
        key: form.key('email'),
        label: 'Электронная почта',
        placeholder: 'name@mail.ru',
        ...form.getInputProps('email'),
    };

    const promocodeProps = {
        radius: 'xs',
        name: 'promo_code',
        key: form.key('promo_code'),
        placeholder: 'Введите промокод',
        ...form.getInputProps('promo_code'),
    };

    const onSubmit = form.onSubmit((data) => {
        const preparedData: PurchasedReportRequest = { ...data };
        if (surveyId) {
            delete preparedData.mbti_type;
        }

        if (!surveyId) {
            delete preparedData.survey_result;
        }

        if (!preparedData.promo_code) {
            delete preparedData.promo_code;
        }

        purchaseReportHandler(preparedData);
    });

    return {
        form,
        onSubmit,
        emailProps,
        promocodeProps,
    };
};
