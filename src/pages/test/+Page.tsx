import { TestContainer } from '@/entities/Test';
import { TestControls } from '@/features/TestControls';
import { SubmitTest } from '@/widgets/SubmitTest';
import { TestFlow } from '@/widgets/TestFlow';

export default function Page() {
    return (
        <TestContainer>
            <TestFlow />
            <TestControls />
            <SubmitTest />
        </TestContainer>
    );
}
