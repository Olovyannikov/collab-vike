import { Button } from '@mantine/core';
import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';

import { sendFreeReportOnEmailMutation } from '@/entities/Report/api';

import { freeReportSent } from './model';

interface SendReportEmailProps {
    isFreeReport?: boolean;
}

export const SendReportEmail = ({ isFreeReport = true }: SendReportEmailProps) => {
    const { onFreeReportSendHandler, isLoading } = useUnit({
        onFreeReportSendHandler: freeReportSent,
        isLoading: sendFreeReportOnEmailMutation.$pending,
    });

    return (
        <Button
            mb='xl'
            size='md'
            fullWidth
            c='dark.7'
            color='dark.7'
            variant='outline'
            leftSection={<EnvelopeSimple size={20} />}
            loading={isLoading}
            onClick={isFreeReport ? onFreeReportSendHandler : () => {}}
        >
            Отправить отчет на почту
        </Button>
    );
};
