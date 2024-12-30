import manImage from '@/app/assets/man-temp_large.webp';
import { HelpNavigator } from '@/features/HelpNavigator';
import { MainButton } from '@/shared/ui';
import { InnerWrapper } from '@/widgets/InnerWrapper';

export default function Page() {
    return (
        <InnerWrapper
            title='Оплата прошла успешно!'
            text='Вы можете перейти к своему отчету, просто нажав на кнопку ниже, либо воспользоваться ссылкой,которая была отправлена на ваш электронный адрес. Если у вас появятся вопросы или понадобится помощь, наша команда всегда на связи.'
            image={manImage}
            navigateTo='/'
            backButtonText='На главную'
        >
            <MainButton>Посмотреть полный отчет</MainButton>
            <HelpNavigator />
        </InnerWrapper>
    );
}
