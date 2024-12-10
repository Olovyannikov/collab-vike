import { useState } from 'react';
import { Button, Group, Pagination } from '@mantine/core';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { motion } from 'framer-motion';
import { isArray } from 'lodash-es';
import { useTimeout } from 'usehooks-ts';

import {
    $currentPage,
    $currentValue,
    $preparedQuestions,
    formPageChanged,
    getQuestionsQuery,
    submitScaleForm,
} from '@/entities/Test';

import s from './TestControls.module.css';

export const TestControls = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const { questions, page, onChange, currentValue, onSubmit } = useUnit({
        questions: $preparedQuestions,
        page: $currentPage,
        onChange: formPageChanged,
        currentValue: $currentValue,
        onSubmit: submitScaleForm,
    });

    const isExists = Boolean(isArray(currentValue) ? currentValue.length > 0 : currentValue);
    useTimeout(() => (isExists ? setVisible(true) : setVisible(false)), isExists ? 1000 : 0);

    if (!questions) return null;

    const isFirst = page === 0;
    const isLast = page === questions.length - 1;

    console.log({ visible, isLast, isExists, currentValue, page });

    return (
        <Pagination.Root total={questions.length} mt='auto' value={page} onChange={onChange}>
            <Group justify='space-between'>
                <Pagination.Previous
                    hidden={isFirst}
                    className={clsx(s.button, s.prev)}
                    icon={() => <ArrowLeft weight='bold' />}
                />
                <motion.div
                    style={{ marginLeft: 'auto' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Pagination.Next
                        hidden={!visible || isLast}
                        className={clsx(s.button, s.next)}
                        icon={() => <ArrowRight weight='bold' />}
                    />
                    <Button
                        hidden={!isLast}
                        onClick={onSubmit}
                        className={s.end}
                        variant='subtle'
                        c='dark.6'
                        fw='700'
                        fz={16}
                        rightSection={<ArrowRight weight='bold' />}
                    >
                        <span className={s.endText}>Завершить</span>
                    </Button>
                </motion.div>
            </Group>
        </Pagination.Root>
    );
};
