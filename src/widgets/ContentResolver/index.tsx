import { Stack, Title } from '@mantine/core';
import { useUnit } from 'effector-react';

import { $freeContent } from '@/entities/PersonalityTypes';
import {
    BarChart,
    BlockquoteLine,
    ConclusionPaywall,
    FilledBulletList,
    Header,
    IconList,
    MainTitle,
    OrderedCards,
    Paragraph,
    Paywall,
    Subscription,
} from '@/entities/Report';
import { BuyFullReportButton } from '@/features/BuyFullReportButton';
import { useIsLarge } from '@/shared/hooks';
import { InnerContainer } from '@/shared/ui';

import s from './ContentResolver.module.css';

export const ContentResolver = () => {
    const isLarge = useIsLarge();
    const content = useUnit($freeContent);

    if (!content) return null;

    return (
        <InnerContainer>
            {content.map((item, idx) => (
                <Stack gap={isLarge ? '5xl' : 'md'} mb={isLarge ? 100 : 60} key={idx}>
                    <Title className={s.title}>{item.title}</Title>
                    {item.content.map((item, idx) => {
                        switch (item.type) {
                            case 'paywall':
                                return (
                                    <Paywall
                                        {...item}
                                        key={`${item.type}_${idx}`}
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
                                return <FilledBulletList {...item} key={`${item.type}_${idx}`} />;
                            case 'bar_chart': {
                                const marks = Object.entries(item.mbti_percentages).map((el) => ({
                                    value: el[1].positive,
                                    label: el[0],
                                    data: item.mbti_data[el[0]],
                                    mbti_type: Object.keys(item.mbti_data),
                                }));

                                return <BarChart marks={marks} key={`${item.type}_${idx}`} />;
                            }
                            case 'paragraph':
                                return <Paragraph text={item.text} key={`${item.type}_${idx}`} />;
                            case 'title':
                                return <MainTitle key={`${item.type}_${idx}`}>{item.text}</MainTitle>;
                            case 'icon_list':
                                return <IconList items={item.items} key={`${item.type}_${idx}`} />;
                            case 'header':
                                return <Header c={item.color} text={item.text} key={`${item.type}_${idx}`} />;
                            case 'ordered_cards':
                                return <OrderedCards {...item} key={`${item.type}_${item.color}_${idx}`} />;
                            case 'subscription':
                                return (
                                    <Subscription
                                        {...item}
                                        subscriptionFormSlot={<></>}
                                        key={`${item.type}_${item.color}_${idx}`}
                                    />
                                );
                        }
                    })}
                </Stack>
            ))}
        </InnerContainer>
    );
};
