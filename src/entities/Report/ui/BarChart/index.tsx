import { Box, Popover, Slider, Stack } from '@mantine/core';
import { Info } from '@phosphor-icons/react/dist/ssr';

import { Header, Paragraph } from '@/entities/Report';

import s from './BarChart.module.css';

interface BarChartProps {
    marks: {
        value: number;
        label: string;
        data: {
            text: string;
            type: 'paragraph' | 'header';
        }[];
        mbti_type: string[];
    }[];
}

const TypeToColorMap: Record<string, string> = {
    'E-I': 'violet',
    'J-P': 'yellow',
    'S-N': 'green',
    'T-F': 'indigo',
};

export const BarChart = ({ marks }: BarChartProps) => {
    return (
        <Stack mt={40} mb={60} gap={84}>
            {marks.map((mark, i) => (
                <Popover offset={40} key={i} width='90%' position='top' shadow='sm'>
                    <Popover.Target>
                        <Box pos='relative'>
                            <Info style={{ '--offset': mark.value + '%' }} size={16} className={s.icon} />
                            <Slider
                                labelAlwaysOn
                                classNames={s}
                                data-value={mark.value}
                                data-type={mark.label}
                                value={mark.value}
                            />
                        </Box>
                    </Popover.Target>
                    <Popover.Dropdown bg={`${TypeToColorMap[mark.mbti_type[i]]}.0`}>
                        {mark.data.map((item, idx) => {
                            switch (item.type) {
                                case 'paragraph':
                                    return <Paragraph key={idx} text={item.text} />;
                                case 'header':
                                    return (
                                        <Header
                                            key={idx}
                                            text={item.text}
                                            c={`${TypeToColorMap[mark.mbti_type[i]]}.9`}
                                        />
                                    );
                            }
                        })}
                    </Popover.Dropdown>
                </Popover>
            ))}
        </Stack>
    );
};
