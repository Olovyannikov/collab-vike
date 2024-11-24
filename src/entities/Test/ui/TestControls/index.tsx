import { useCallback } from 'react';
import { Button, Flex, Group, Pagination } from '@mantine/core';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useUnit } from 'effector-react';

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

    return (
        <Pagination.Root total={questions.length} value={activePage} onChange={onPageChangeHandler} mt='sm'>
            <Group justify='space-between'>
                <Pagination.Previous disabled={isFirstPage} icon={ArrowLeft} className={s.button} />
                <Pagination.Next icon={ArrowRight} className={s.button}>
                    Next
                </Pagination.Next>
            </Group>
        </Pagination.Root>
    );
};
