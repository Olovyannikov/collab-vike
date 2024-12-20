import { Stack } from '@mantine/core';

// import { useUnit } from 'effector-react';
import {
    // $freeContent,
    Content,
} from '@/entities/PersonalityTypes';
import {
    BarChart,
    BlockquoteLine,
    FilledBulletList,
    Header,
    MainTitle,
    OrderedCards,
    Paragraph,
    Paywall,
} from '@/entities/Report';
import { IconList } from '@/entities/Report/ui/IconList';

interface ContentResolverProps {
    content: Content['content'];
}

export const ContentResolver = ({ content }: ContentResolverProps) => {
    // TODO: after debug use this instance
    // const content = useUnit($freeContent);

    return (
        <Stack mb={60}>
            {content?.map((item, idx) => {
                switch (item.type) {
                    case 'blockquote_line':
                        return <BlockquoteLine text={item.text} key={`${item.type}_${idx}`} />;
                    case 'filled_bullet_list':
                        return <FilledBulletList items={item.items} key={`${item.type}_${idx}`} />;
                    case 'paywall':
                        return (
                            <Paywall
                                buttonText={item.button_text}
                                title={item.title}
                                points={item.points}
                                key={`${item.type}_${idx}`}
                            />
                        );
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
                        return <OrderedCards color={item.color} items={item.items} key={item.type} />;
                }
            })}
        </Stack>
    );
};
