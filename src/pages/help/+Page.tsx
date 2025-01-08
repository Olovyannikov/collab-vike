import { Text } from '@mantine/core';

import { HelpForm } from '@/widgets/HelpForm';
import { InnerWrapper } from '@/widgets/InnerWrapper';

export default function Page() {
    return (
        <InnerWrapper
            title='Служба поддержки'
            text={
                <>
                    Чтобы связаться с нами, заполните форму. Мы стараемся отвечать в течение часа, однако в некоторых
                    случаях это может занять больше времени. Самый быстрый способ получить ответ — через{' '}
                    <Text component='a' c='blue.7' td='underline' target='_blank' href='https://t.me/cognitivelab_ru'>
                        Telegram
                    </Text>{' '}
                    или{' '}
                    <Text
                        td='underline'
                        component='a'
                        c='blue.7'
                        target='_blank'
                        href='https://api.whatsapp.com/send/?phone=79043330809'
                    >
                        WhatsApp
                    </Text>
                    .
                </>
            }
            image='/images/men-temp_large.webp'
        >
            <HelpForm />
        </InnerWrapper>
    );
}
