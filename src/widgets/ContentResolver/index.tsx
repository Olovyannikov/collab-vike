import { Stack } from '@mantine/core';

// import { useUnit } from 'effector-react';
import {
    // $freeContent,
    Content,
} from '@/entities/PersonalityTypes';
import { BarChart, BlockquoteLine, FilledBulletList, Paragraph, Paywall } from '@/entities/Report';

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
                    case 'bar_chart':
                        return <BarChart key={`${item.type}_${idx}`} />;
                    case 'paragraph':
                        return <Paragraph text={item.text} key={`${item.type}_${idx}`} />;
                }
            })}
        </Stack>
    );
};
