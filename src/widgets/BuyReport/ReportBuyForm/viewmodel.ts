import { useForm } from '@mantine/form';
import { useUnit } from 'effector-react';
import { usePageContext } from 'vike-react/usePageContext';

import type { PurchasedReportRequest } from '@/entities/Payment';
import { getFreeResultQuery } from '@/entities/Report';

import { reportPurchased } from './model';

export const useReportBuyFormViewModel = () => {
    const { data } = useUnit(getFreeResultQuery);
    const {
        urlParsed: { search },
    } = usePageContext();
    const purchaseReportHandler = useUnit(reportPurchased);

    const mbti = search.mbti || search.mbti_type;
    const surveyId = search.survey_id;

    const form = useForm({
        mode: 'controlled',
        initialValues: {
            email: '',
            mbti_type: surveyId ? '' : (data?.mbti_type ?? mbti),
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

    console.log({
        mbti,
        surveyId,
    });

    const onSubmit = form.onSubmit((data) => {
        const preparedData: PurchasedReportRequest = { ...data };
        if (!data.mbti_type) {
            preparedData.mbti_type = mbti;
        }

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
