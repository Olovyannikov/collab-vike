import { Box, Button } from '@mantine/core';

import manImage from '@/app/assets/man-temp_large.webp';
import { ReportBuyForm, ReportPriceInfo } from '@/widgets/BuyReport';
import { InnerWrapper } from '@/widgets/InnerWrapper';

export default function Page() {
    return (
        <InnerWrapper image={manImage}>
            <Box>
                <ReportPriceInfo />
                <ReportBuyForm />
                <Button fullWidth variant='transparent' c='dark.7' component='a' href='/help'>
                    Служба поддержки
                </Button>
            </Box>
        </InnerWrapper>
    );
}
