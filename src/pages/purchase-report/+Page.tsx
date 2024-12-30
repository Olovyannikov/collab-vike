import { Box } from '@mantine/core';

import manImage from '@/app/assets/man-temp_large.webp';
import { HelpNavigator } from '@/features/HelpNavigator';
import { ReportBuyForm, ReportPriceInfo } from '@/widgets/BuyReport';
import { InnerWrapper } from '@/widgets/InnerWrapper';

export default function Page() {
    return (
        <InnerWrapper image={manImage}>
            <Box>
                <ReportPriceInfo />
                <ReportBuyForm />
                <HelpNavigator />
            </Box>
        </InnerWrapper>
    );
}
