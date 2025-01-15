import { Button, Flex, Paper, Text, TextInput } from '@mantine/core';
import { useUnit } from 'effector-react';

import { getPriceWithPromocodeQuery } from '@/entities/Payment';
import { MainButton } from '@/shared/ui';
import { toInputUppercase } from '@/shared/utils/toInputUppercase';
import { FormWrapper } from '@/widgets/FormWrapper';
import { FormInput } from '@/widgets/FormWrapper/FormInput';

import { $promocodeErrorMessage, $showSuccessPromoMessage, applyPromocodeClicked } from './model';
import s from './ReportBuyForm.module.css';
import { useReportBuyFormViewModel } from './viewmodel';

export const ReportBuyForm = () => {
    const { pending } = useUnit(getPriceWithPromocodeQuery);
    const { applyPromoHandler, promocodeError, showSuccessMessage } = useUnit({
        applyPromoHandler: applyPromocodeClicked,
        promocodeError: $promocodeErrorMessage,
        showSuccessMessage: $showSuccessPromoMessage,
    });
    const { onSubmit, promocodeProps, emailProps, form } = useReportBuyFormViewModel();

    return (
        <FormWrapper onSubmit={onSubmit}>
            <FormInput {...emailProps} />
            <Paper bg='gray.0' radius='xs' p='md' px='sm'>
                <Text className={s.promocodeLabel}>У меня есть промокод</Text>
                <Flex className={s.promocodeWrapper}>
                    <TextInput
                        {...promocodeProps}
                        disabled={pending}
                        error={promocodeError}
                        onInput={toInputUppercase}
                        data-success={showSuccessMessage}
                        description={showSuccessMessage ? 'Промокод применен' : ''}
                        inputWrapperOrder={['label', 'input', 'description', 'error']}
                    />
                    <Button
                        fullWidth
                        c='dark.7'
                        radius='xs'
                        color='dark.7'
                        variant='outline'
                        disabled={pending}
                        loading={pending}
                        onClick={() => applyPromoHandler(form.values.promo_code.toUpperCase())}
                    >
                        Применить
                    </Button>
                </Flex>
            </Paper>
            <MainButton disabled={pending} radius='xs' size='md' type='submit'>
                Перейти к оплате
            </MainButton>
            <Text fz={12} ta='center' mb={12}>
                Нажимая на кнопку, вы подтверждаете свое согласие на сбор, хранение и использование ваших персональных
                данных согласно{' '}
                <Text fz={12} c='blue.7' component='a' href='/privacy-policy'>
                    Политике конфиденциальности
                </Text>{' '}
                и принимаете условия{' '}
                <Text fz={12} c='blue.7' component='a' href='/publisher-offer'>
                    Публичной оферты
                </Text>
            </Text>
        </FormWrapper>
    );
};
