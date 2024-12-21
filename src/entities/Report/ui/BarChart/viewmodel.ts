import { useCallback, useEffect, useState } from 'react';

import { useIsLarge } from '@/shared/hooks';

export interface Mark {
    value: number;
    label: string;
    data: {
        text: string;
        type: 'paragraph' | 'header';
    }[];
    mbti_type: string[];
}

export const useBarChartViewModel = ({ marks }: { marks: Mark[] }) => {
    const [mounted, setMounted] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Mark | null>(null);
    const isLarge = useIsLarge();

    const onSelectItemMouseOverHandler = useCallback(
        (mark: {
            value: number;
            label: string;
            data: { text: string; type: 'header' | 'paragraph' }[];
            mbti_type: string[];
        }) => {
            if (selectedItem?.label === mark.label) return;
            setMounted(false);
            setTimeout(() => {
                setSelectedItem(mark);
                setMounted(true);
            }, 200);
        },
        [selectedItem, mounted]
    );

    useEffect(() => {
        if (!isLarge) return;
        setMounted(true);
        setSelectedItem(marks[0]);
    }, [isLarge]);

    return {
        onSelectItemMouseOverHandler,
        selectedItem,
        mounted,
    };
};
