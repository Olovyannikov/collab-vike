import { type FormEventHandler } from 'react';
import { useForm } from '@effector-reform/react';
import { Button, Flex, Text, TextInput } from '@mantine/core';
import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';

import { sendFreeReportOnEmailMutation } from '@/entities/Report';
import { useIsLarge } from '@/shared/hooks';
import { InnerContainer } from '@/shared/ui';

import { sendReportForm } from './model';
import s from './SendReportEmail.module.css';

interface SendReportEmailProps {
    isFreeReport?: boolean;
    type?: 'block' | 'text';
}

export const SendReportEmail = ({ isFreeReport = true, type = 'text' }: SendReportEmailProps) => {
    const isLarge = useIsLarge();
    const { fields, onSubmit, isValid, onValidate } = useForm(sendReportForm);
    const isLoading = useUnit(sendFreeReportOnEmailMutation.$pending);
    const isButtonDisabled = isLoading;

    const onS: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onValidate();

        if (!isValid) onSubmit(e);
    };

    return (
        <InnerContainer className={type === 'block' ? s.container : ''}>
            <form onSubmit={isFreeReport ? onS : () => {}}>
                <Flex className={s.wrapper}>
                    {type === 'text' && (
                        <Text fw='bold' visibleFrom='md' fz={24}>
                            Отправьте отчет на почту
                        </Text>
                    )}
                    <TextInput
                        required
                        inputMode='email'
                        disabled={isLoading}
                        placeholder='name@mail.ru'
                        value={fields.email.value}
                        error={fields.email.error}
                        miw={isLarge ? 514 : '100%'}
                        ml={type === 'text' ? 'auto' : 0}
                        size={type === 'block' ? 'lg' : 'md'}
                        bg={type === 'block' ? 'violet.0' : 'white'}
                        onChange={(e) => fields.email.onChange(e.target.value)}
                    />
                    <Button
                        type='submit'
                        color='dark.7'
                        loading={isLoading}
                        fullWidth={!isLarge}
                        disabled={isButtonDisabled}
                        size={type === 'block' ? 'lg' : 'md'}
                        leftSection={<EnvelopeSimple size={20} />}
                        variant={type === 'block' ? 'filled' : 'outline'}
                        c={type === 'block' && !isButtonDisabled ? 'white' : 'dark.7'}
                    >
                        {isLarge ? 'Отправить' : 'Отправить отчет на почту'}
                    </Button>
                </Flex>
            </form>
        </InnerContainer>
    );
};
