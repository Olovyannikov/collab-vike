import { Button, Flex } from '@mantine/core';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useUnit } from 'effector-react';

import { getQuestionsQuery, TestModel } from '@/entities/Test';

import s from './TestControls.module.css';

export const TestControls = () => {
    const { data: questions } = useUnit(getQuestionsQuery);
    const [page, next, prev] = useUnit([TestModel.$currentPage, TestModel.pageApi.inc, TestModel.pageApi.dec]);

    if (!questions) return;

    const isFirstPage = page < 1;
    const isLastPage = page === questions?.length - 1;

    return (
        <Flex justify='space-between'>
            <Button c='black' variant='subtle' className={s.button} radius='lg' onClick={prev} disabled={isFirstPage}>
                <Flex gap='sm'>
                    <ArrowLeft />
                    Назад
                </Flex>
            </Button>
            <Button className={s.button} c='black' variant='subtle' radius='lg' disabled={isLastPage} onClick={next}>
                <Flex gap='sm'>
                    Вперед
                    <ArrowRight />
                </Flex>
            </Button>
        </Flex>
    );
};
