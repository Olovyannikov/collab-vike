import { Box, Group, Pagination, Paper, Text } from '@mantine/core';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { useUnit } from 'effector-react';

import {
    $currentContent,
    $currentPage,
    $isFirstPage,
    $isLastPage,
    $isUserReportPageLoading,
    currentPageChanged,
    getIconsMap,
} from '@/entities/Report';
import { useIsLarge } from '@/shared/hooks';

import s from './PaidReportNavigation.module.css';

export const PaidReportPagination = () => {
    const isLarge = useIsLarge();

    const { currentPages, content, onPageChange, isFirstPage, isLastPage, page } = useUnit({
        page: $currentPage,
        isLastPage: $isLastPage,
        content: $currentContent,
        isFirstPage: $isFirstPage,
        onPageChange: currentPageChanged,
        isLoading: $isUserReportPageLoading,
        currentPages: $currentContent.map((content) => content.length),
    });

    const titlePrev = content[page - 2]?.title;
    const titleNext = content[page]?.title;

    const icons = getIconsMap(isLarge);

    return (
        <Pagination.Root value={page} total={currentPages} onChange={onPageChange}>
            <Group className={s.grid} mt={100}>
                {!isFirstPage && (
                    <Pagination.Previous
                        className={s.prev}
                        icon={() => (
                            <Group align='center' wrap='nowrap'>
                                <Box>
                                    <ArrowLeft weight='bold' size={isLarge ? 32 : 28} />
                                </Box>
                                <Group wrap='nowrap'>
                                    <Paper
                                        className={s.paper}
                                        p={isLarge ? 'lg' : 'xs'}
                                        py={isLarge ? 18.5 : 6}
                                        bg='violet.0'
                                    >
                                        {icons[titlePrev]}
                                    </Paper>
                                    <Text hidden={!isLarge} className={s.text}>
                                        {content[page - 2]?.title ?? ''}
                                    </Text>
                                </Group>
                            </Group>
                        )}
                    />
                )}

                <Pagination.Next
                    className={s.next}
                    hidden={isLastPage}
                    icon={() => (
                        <Group align='center' wrap='nowrap'>
                            <Group wrap='nowrap'>
                                <Paper
                                    className={s.paper}
                                    p={isLarge ? 'lg' : 'xs'}
                                    py={isLarge ? 18.5 : 6}
                                    bg='violet.0'
                                >
                                    {icons[titleNext]}
                                </Paper>
                                <Text hidden={!isLarge} className={s.text}>
                                    {content[page]?.title ?? ''}
                                </Text>
                            </Group>
                            <Box>
                                <ArrowRight weight='bold' size={isLarge ? 32 : 28} />
                            </Box>
                        </Group>
                    )}
                />
            </Group>
        </Pagination.Root>
    );
};
