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
}

export const SendReportEmail = ({ isFreeReport = true }: SendReportEmailProps) => {
    const isLarge = useIsLarge();
    const { onSubmit, fields } = useForm(sendReportForm);
    const isLoading = useUnit(sendFreeReportOnEmailMutation.$pending);

    const isButtonDisabled = isLoading || !fields.email.value || Boolean(fields.email.error);

    const onFreeReportSendHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <InnerContainer>
            <form onSubmit={isFreeReport ? onFreeReportSendHandler : () => {}}>
                <Flex className={s.wrapper}>
                    <Text fw='bold' visibleFrom='md'>
                        Отправьте отчет на почту
                    </Text>
                    <TextInput
                        ml='auto'
                        size='md'
                        disabled={isLoading}
                        placeholder='name@mail.ru'
                        value={fields.email.value}
                        error={fields.email.error}
                        miw={isLarge ? 514 : '100%'}
                        onChange={(e) => fields.email.onChange(e.target.value)}
                    />
                    <Button
                        size='md'
                        c='dark.7'
                        color='dark.7'
                        variant='outline'
                        loading={isLoading}
                        fullWidth={!isLarge}
                        disabled={isButtonDisabled}
                        leftSection={<EnvelopeSimple size={20} />}
                    >
                        {isLarge ? 'Отправить' : 'Отправить отчет на почту'}
                    </Button>
                </Flex>
            </form>
        </InnerContainer>
    );
};
