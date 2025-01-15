import { useUnit } from 'effector-react';
import { navigate } from 'vike/client/router';
import { usePageContext } from 'vike-react/usePageContext';

import { $userOrder, $userOrderStatus, getSurveysInfoQuery } from '@/entities/Payment';
import { HelpNavigator } from '@/features/HelpNavigator';
import { MainButton, PageLoader } from '@/shared/ui';
import { getStatusInfo } from '@/shared/utils/report/getStatusInfo';
import { InnerWrapper } from '@/widgets/InnerWrapper';

export default function Page() {
    const {
        urlParsed: {
            search: { order_id },
        },
    } = usePageContext();
    const { pending } = useUnit(getSurveysInfoQuery);
    const { status, order } = useUnit({
        order: $userOrder,
        status: $userOrderStatus,
    });

    const { title, buttonText, text } = getStatusInfo(status);

    if (!order_id) navigate('/');
    if (pending || !order) return <PageLoader />;

    return (
        <InnerWrapper
            title={title}
            text={text}
            image='/images/men-temp_large.webp'
            navigateTo='/'
            backButtonText='На главную'
        >
            <MainButton component='a' href={status === 'paid' ? `/report/${order?.user_report}` : `/`}>
                {buttonText}
            </MainButton>
            <HelpNavigator />
        </InnerWrapper>
    );
}
