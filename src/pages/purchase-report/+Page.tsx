import { Box, Button, Container, Image } from '@mantine/core';

import manImage from '@/app/assets/man-temp_large.webp';
import { BackButton, InnerContainer } from '@/shared/ui';
import { ReportBuyForm, ReportPriceInfo } from '@/widgets/BuyReport';

import s from './PurchaseReportPage.module.css';

export default function Page() {
    return (
        <Container pb='5xl'>
            <BackButton />
            <InnerContainer className={s.wrapper}>
                <Image src={manImage} width={185} height={178} flex='auto' />
                <Box>
                    <ReportPriceInfo />
                    <ReportBuyForm />
                    <Button fullWidth variant='transparent' c='dark.7' component='a' href='/help'>
                        Служба поддержки
                    </Button>
                </Box>
            </InnerContainer>
        </Container>
    );
}
