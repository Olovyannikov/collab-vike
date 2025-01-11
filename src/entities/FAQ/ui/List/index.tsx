import { Accordion, Title } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import Markdown from 'markdown-to-jsx';

import { FaqItem } from '../../types';
import s from './FAQ.module.css';

interface FAQListProps {
    items: FaqItem[];
}

export const FAQList = ({ items }: FAQListProps) => {
    return (
        <Accordion radius={0} variant='filled' classNames={s} chevron={<CaretDown weight='bold' size={24} />}>
            {items?.map((item) => (
                <Accordion.Item key={item.id} value={item.title}>
                    <Accordion.Control>
                        <Title fz={24}>{item.title}</Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Markdown>{item.body.data}</Markdown>
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};
