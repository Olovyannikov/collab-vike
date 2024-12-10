import { useState } from 'react';
import { Button, Group, Pagination } from '@mantine/core';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { motion } from 'framer-motion';
import { useTimeout } from 'usehooks-ts';

import {
    $currentPage,
    $currentValue,
    $preparedQuestions,
    formPageChanged,
    submitModalStateChanged,
} from '@/entities/Test';

import s from './TestControls.module.css';

export const TestControls = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const { questions, page, onChange, currentValue, controlModal } = useUnit({
        questions: $preparedQuestions,
        page: $currentPage,
        onChange: formPageChanged,
        currentValue: $currentValue,
        controlModal: submitModalStateChanged,
    });

    const isExists = Boolean(currentValue !== null);
    useTimeout(() => (isExists ? setVisible(true) : setVisible(false)), isExists ? 1000 : 0);

    if (!questions) return null;

    const isFirst = page === 1;
    const isLast = page === questions.length;

    return (
        <Pagination.Root total={questions.length} mt='auto' value={page} onChange={onChange}>
            <Group justify='space-between'>
                {!isFirst && (
                    <Pagination.Previous
                        disabled={false}
                        className={clsx(s.button, s.prev)}
                        icon={() => <ArrowLeft weight='bold' />}
                    />
                )}
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
                        onClick={controlModal}
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
