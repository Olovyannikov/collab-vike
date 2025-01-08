import { Box } from '@mantine/core';

import { HelpNavigator } from '@/features/HelpNavigator';
import { ReportBuyForm, ReportPriceInfo } from '@/widgets/BuyReport';
import { InnerWrapper } from '@/widgets/InnerWrapper';

export default function Page() {
    return (
        <InnerWrapper image='/images/man-temp_large.webp'>
            <Box>
                <ReportPriceInfo />
                <ReportBuyForm />
                <HelpNavigator />
            </Box>
        </InnerWrapper>
    );
}
