import type { FormEventHandler } from 'react';
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
    const { onSubmit, fields } = useForm(sendReportForm);
    const isLoading = useUnit(sendFreeReportOnEmailMutation.$pending);

    const isButtonDisabled = isLoading || !fields.email.value || Boolean(fields.email.error);

    const onFreeReportSendHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <InnerContainer className={type === 'block' ? s.container : ''}>
            <form onSubmit={isFreeReport ? onFreeReportSendHandler : () => {}}>
                <Flex className={s.wrapper}>
                    {type === 'text' && (
                        <Text fw='bold' visibleFrom='md' fz={24}>
                            Отправьте отчет на почту
                        </Text>
                    )}
                    <TextInput
                        ml={type === 'text' ? 'auto' : 0}
                        size={type === 'block' ? 'lg' : 'md'}
                        disabled={isLoading}
                        placeholder='name@mail.ru'
                        value={fields.email.value}
                        error={fields.email.error}
                        miw={isLarge ? 514 : '100%'}
                        bg={type === 'block' ? 'violet.0' : 'white'}
                        onChange={(e) => fields.email.onChange(e.target.value)}
                    />
                    <Button
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
