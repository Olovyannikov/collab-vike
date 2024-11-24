import { useCallback, useRef } from 'react';
import { Container } from '@mantine/core';
import { useUnit } from 'effector-react/effector-react.mjs';

import { ActiveQuestionModel, TestControls, TestStarter } from '@/entities/Test';
import { TestBlock } from '@/widgets/TestBlock';

export default function Page() {
    const setActiveQuestion = useUnit(ActiveQuestionModel.activeQuestionChanged);
    const myRef = useRef<HTMLDivElement | null>(null);
    const executeScroll = () => myRef.current?.scrollIntoView();

    const onTestStartedHandler = useCallback(() => {
        setActiveQuestion(0);
        executeScroll();
    }, []);

    return (
        <Container pb={40}>
            <TestStarter onTestStarted={onTestStartedHandler} />
            <TestBlock ref={myRef} />
            <TestControls onPageChange={executeScroll} />
        </Container>
    );
}
