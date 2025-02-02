import { useState } from 'react';
import { Link } from 'react-scroll';
import { Box, Button, Center, Group, Menu, Paper, Text } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react';
import { useStoreMap } from 'effector-react';
import { useUnit } from 'effector-react';

import { getFreeResultQuery, getIconsMap } from '@/entities/Report';
import { TYPE_TO_COLOR_MAP } from '@/shared/constants';
import { useIsLarge } from '@/shared/hooks';
import { InnerContainer } from '@/shared/ui';

import s from './ReportNavigation.module.css';

export const ReportNavigation = () => {
    const isLarge = useIsLarge();

    const { data } = useUnit(getFreeResultQuery);

    const content = useStoreMap({
        store: getFreeResultQuery.$data,
        keys: ['title'],
        fn: (content) => content?.content.map(({ title }) => title),
    });

    const currentColor = TYPE_TO_COLOR_MAP[data?.mbti_type ?? 'ENFJ'];

    const icons = getIconsMap(isLarge);

    const [activeMenu, setActiveMenu] = useState(content?.[0] ?? 'Введение');

    return (
        <Box style={{ zIndex: 1000 }} pos='sticky' top={0} bg='white'>
            <InnerContainer py='lg' pb='md' mb={32}>
                <Menu
                    offset={16}
                    keepMounted
                    width='target'
                    classNames={s}
                    position='bottom'
                    key={activeMenu}
                    closeOnItemClick
                    data-color={currentColor}
                    middlewares={{
                        flip: false,
                    }}
                >
                    <Menu.Target>
                        <Button px={0} size='lg' variant='transparent' classNames={s} fullWidth justify='flex-start'>
                            <Group
                                style={{ overflow: 'hidden' }}
                                gap={0}
                                w='100%'
                                wrap='nowrap'
                                align='center'
                                justify={isLarge ? 'flex-start' : 'space-between'}
                            >
                                <Group
                                    align='center'
                                    wrap='nowrap'
                                    gap={isLarge ? 'lg' : 'xs'}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <Paper radius='sm' bg={`${currentColor}.1`}>
                                        <Center data-color={currentColor} className={s.center}>
                                            {icons[activeMenu]}
                                        </Center>
                                    </Paper>
                                    <Text ta='start' truncate='end' fz={isLarge ? 32 : 20} fw='bold'>
                                        {activeMenu}
                                    </Text>
                                    <CaretDown
                                        size={isLarge ? 32 : 20}
                                        style={{ flex: '0 1 32px' }}
                                        color='var(--mantine-color-dark-9)'
                                    />
                                </Group>
                            </Group>
                        </Button>
                    </Menu.Target>

                    <Menu.Dropdown w='auto'>
                        {content?.map((title) => (
                            <Menu.Item
                                leftSection={
                                    <Paper p='xxs' radius='xs' bg={`${currentColor}.1`}>
                                        <Center className={s.dropdownIcon}>{icons[title]}</Center>
                                    </Paper>
                                }
                                key={title}
                            >
                                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                {/* @ts-expect-error mistypes */}
                                <Link delay={400} spy offset={-100} to={title} onSetActive={setActiveMenu}>
                                    <Text span inline fz={14} fw='bold'>
                                        {title}
                                    </Text>
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu.Dropdown>
                </Menu>
            </InnerContainer>
        </Box>
    );
};
