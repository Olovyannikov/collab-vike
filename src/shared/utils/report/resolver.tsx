import { Title } from '@mantine/core';

import {
    BarChart,
    BlockquoteLine,
    Cards,
    ConclusionPaywall,
    type ContentType,
    FilledBulletList,
    Header,
    IconList,
    type ListItem,
    MainTitle,
    OrderedCards,
    OrderedList,
    Paragraph,
    Paywall,
    Subscription,
    TextStrokeDash,
} from '@/entities/Report';
import { AdBanner } from '@/entities/Test';
import { BuyFullReportButton } from '@/features/BuyFullReportButton';
import { NavigateToFullStructureTemplate } from '@/features/NavigateToFullStructureTemplate';
import { SendReportEmail } from '@/features/SendReportEmail';

import { isListItemArray } from '../../types/guards';
import { MainButton } from '../../ui';
import { barChartPrepareData } from './barChartPrepareData';

interface ContentResolverType {
    color: string;
    text: string;
    type: ContentType;
    points: string[];
    title: string;
    button_text: string;
    items: ListItem | ListItem[];
    mbti_percentages: Record<string, { negative: number; positive: number }>;
    mbti_data: Record<string, { text: string; type: 'header' | 'paragraph' }[]>;
    primary_button_text: string;
    secondary_button_text: string;
}

const BANNER_CONTENT =
    'Узнайте свои сильные стороны и потенциал с нашим готовым отчетом по типу личности – доступно сразу после заказа!';
const BANNER_TITLE = 'Купить отчет без прохождения теста';

export const resolver = (content?: Partial<ContentResolverType>[], color?: string, showBanner?: boolean) => {
    return (
        <>
            {content?.map((item, idx) => {
                if (!item) return null;
                switch (item.type) {
                    case 'paywall':
                        return (
                            <Paywall
                                {...item}
                                key={`${item.type}_${item.button_text}_${idx}`}
                                buttonText={item.button_text}
                                buyButtonSlot={<BuyFullReportButton />}
                            />
                        );
                    case 'conclusion_paywall':
                        return (
                            <ConclusionPaywall
                                {...item}
                                buyButtonSlot={<BuyFullReportButton />}
                                key={`${item.type}_${item.color}_${idx}`}
                            />
                        );
                    case 'blockquote_line':
                        return <BlockquoteLine {...item} key={`${item.type}_${idx}`} />;
                    case 'filled_bullet_list':
                        return (
                            <FilledBulletList
                                data-color={color}
                                items={isListItemArray(item.items) ? item.items : []}
                                key={`${item.type}_${idx}`}
                            />
                        );
                    case 'bar_chart':
                        return <BarChart marks={barChartPrepareData(item)} key={`${item.type}_${idx}`} />;
                    case 'paragraph':
                        return <Paragraph text={item.text ?? ''} key={`${item.type}_${item.text}_${idx}`} />;
                    case 'title':
                        return <MainTitle key={`${item.type}_${idx}`}>{item.text}</MainTitle>;
                    case 'icon_list':
                        return (
                            <IconList
                                key={`${item.type}_${idx}`}
                                items={isListItemArray(item.items) ? item.items : []}
                            />
                        );
                    case 'header':
                        return <Header c={item.color} text={item.text ?? ''} key={`${item.type}_${idx}`} />;
                    case 'ordered_cards':
                        return (
                            <OrderedCards
                                color={item.color ?? ''}
                                key={`${item.type}_${item.color}_${idx}`}
                                items={isListItemArray(item.items) ? item.items : []}
                                bannerSlot={
                                    showBanner && (
                                        <AdBanner title={BANNER_TITLE} content={BANNER_CONTENT}>
                                            <MainButton size='md' radius='sm' component='a' href='/test'>
                                                Пройти тест
                                            </MainButton>
                                            <NavigateToFullStructureTemplate />
                                        </AdBanner>
                                    )
                                }
                            />
                        );
                    case 'subscription':
                        return (
                            <Subscription
                                {...item}
                                key={`${item.type}_${item.color}_${idx}`}
                                subscriptionFormSlot={<SendReportEmail type='block' />}
                            />
                        );
                    case 'text_stroke_dash':
                        return <TextStrokeDash key={`${item.type}_${idx}`} text={item.text ?? ''} />;
                    case 'subtitle':
                        return (
                            <Title data-type={item.type} fz={32} order={3} mb='md' key={`${item.type}_${idx}`}>
                                {item.text}
                            </Title>
                        );
                    case 'cards':
                        return isListItemArray(item.items) && <Cards key={`${item.type}_${idx}`} items={item.items} />;
                    case 'ordered_list':
                        return (
                            isListItemArray(item.items) && (
                                <OrderedList
                                    data-type={item.type}
                                    color={color}
                                    items={item.items}
                                    key={`${item.type}_${idx}`}
                                />
                            )
                        );
                }
            })}
        </>
    );
};
