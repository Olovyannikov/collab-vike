import { Button } from '@mantine/core';
import { FileText } from '@phosphor-icons/react/dist/ssr';

interface NavigateToFullStructureTemplateProps {
    text?: string;
    link?: string;
}

export const NavigateToFullStructureTemplate = ({
    text = 'Посмотреть структуру отчета',
    link = '/full-report/example',
}: NavigateToFullStructureTemplateProps) => {
    return (
        <Button
            leftSection={<FileText size={24} />}
            component='a'
            href={link}
            size='md'
            variant='outline'
            c='dark.7'
            color='dark.7'
        >
            {text}
        </Button>
    );
};
