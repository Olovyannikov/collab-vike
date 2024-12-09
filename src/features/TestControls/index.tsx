import { Group, Pagination } from '@mantine/core';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { motion } from 'framer-motion';

import { getQuestionsQuery, TestPageModel } from '@/entities/Test';

import s from './TestControls.module.css';

interface TestControlsProps {
    onPageChange: VoidFunction;
}

export const TestControls = ({ onPageChange }: TestControlsProps) => {
    const { data: questions } = useUnit(getQuestionsQuery);
    const [activePage, pageChangeHandler] = useUnit([TestPageModel.$currentTestPage, TestPageModel.testPageChanged]);

    const onPageChangeHandler = (page: number) => {
        onPageChange();
        pageChangeHandler(page);
    };

    if (!questions) return;

    const isFirstPage = activePage === 1;

    // const isCompleted = values.find((el) => el.question === key[activePage - 1]?.question);

    return (
        <Pagination.Root total={questions.length} value={activePage} onChange={onPageChangeHandler} mt='auto'>
            <Group style={{}} justify='space-between'>
                <Pagination.Previous
                    hidden={isFirstPage}
                    disabled={isFirstPage}
                    className={clsx(s.button, s.prev)}
                    icon={() => <ArrowLeft weight='bold' />}
                />
                <motion.div
                    style={{ marginLeft: 'auto' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: 'linear' }}
                >
                    <Pagination.Next
                        ml='auto'
                        // hidden={!isCompleted}
                        className={clsx(s.button, s.next)}
                        icon={() => <ArrowRight weight='bold' />}
                    />
                </motion.div>
            </Group>
        </Pagination.Root>
    );
};
