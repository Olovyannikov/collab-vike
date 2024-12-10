import { memo } from 'react';
import { Button, Group, Modal, Text } from '@mantine/core';

import { MainButton } from '@/shared/ui';

interface SubmitTestModalProps {
    opened: boolean;
    onClose: VoidFunction;
    onSubmit: VoidFunction;
    loading: boolean;
}

export const SubmitTestModal = memo(({ opened, onClose, onSubmit, loading }: SubmitTestModalProps) => (
    <Modal
        opened={opened}
        onClose={onClose}
        centered
        title={
            <Text fz={16} fw='bold'>
                Завершить тестирование?
            </Text>
        }
    >
        <Group gap='sm' justify='end'>
            <Button
                size='sm'
                radius='md'
                variant='outline'
                c='dark.7'
                bd='1px solid var(--mantine-color-dark-7)'
                onClick={onClose}
            >
                Отменить
            </Button>
            <MainButton loading={loading} size='sm' radius='md' onClick={onSubmit}>
                Завершить
            </MainButton>
        </Group>
    </Modal>
));

SubmitTestModal.displayName = 'SubmitTestModal';
