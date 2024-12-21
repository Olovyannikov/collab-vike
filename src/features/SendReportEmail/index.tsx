import type { FormEventHandler } from 'react';
import { useForm } from '@effector-reform/react';
import { Button, Stack, TextInput } from '@mantine/core';
import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';

import { sendFreeReportOnEmailMutation } from '@/entities/Report';

import { sendReportForm } from './model';

interface SendReportEmailProps {
    isFreeReport?: boolean;
}

export const SendReportEmail = ({ isFreeReport = true }: SendReportEmailProps) => {
    const { onSubmit, fields } = useForm(sendReportForm);
    const { isLoading } = useUnit({
        isLoading: sendFreeReportOnEmailMutation.$pending,
    });

    const onFreeReportSendHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <form onSubmit={isFreeReport ? onFreeReportSendHandler : () => {}}>
            <Stack gap='sm'>
                <TextInput
                    size='md'
                    {...fields.email}
                    disabled={isLoading}
                    placeholder='name@mail.ru'
                    onChange={(e) => fields.email.onChange(e.target.value)}
                />
                <Button
                    mb='xl'
                    size='md'
                    fullWidth
                    c='dark.7'
                    color='dark.7'
                    variant='outline'
                    leftSection={<EnvelopeSimple size={20} />}
                    loading={isLoading}
                    disabled={isLoading || !fields.email.value || Boolean(fields.email.error)}
                >
                    Отправить отчет на почту
                </Button>
            </Stack>
        </form>
    );
};
