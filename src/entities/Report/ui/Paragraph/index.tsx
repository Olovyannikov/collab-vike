import { BoldText } from '@/shared/ui';

interface ParagraphProps {
    text: string;
}

const regex = /\*\*(.*?)\*\*/; // регулярное выражение для поиска текста между **

export const Paragraph = ({ text }: ParagraphProps) => {
    const match = text?.match(regex);

    return <BoldText text={text} boldText={match ? match[1] : ''} />;
};
