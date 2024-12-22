import { useState } from 'react';
import { Link } from 'react-scroll';
import { Button, Center, Group, Menu, Paper, Text } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react';
import { useStoreMap, useUnit } from 'effector-react';

import { $freeContent, $navigationIconMap } from '@/entities/PersonalityTypes';
import { useIsLarge } from '@/shared/hooks';
import { InnerContainer } from '@/shared/ui';

import s from './ReportNavigation.module.css';

export const ReportNavigation = () => {
    const isLarge = useIsLarge();

    const content = useStoreMap({
        store: $freeContent,
        keys: ['title'],
        fn: (content) => content.map(({ title }) => title),
    });

    const icons = useUnit($navigationIconMap);

    const [activeMenu, setActiveMenu] = useState(content[0]);

    return (
        <InnerContainer style={{ zIndex: 1000 }} pos='sticky' top={0} py='lg' pb='md' mb={32} bg='white'>
            <Menu
                offset={16}
                keepMounted
                width='target'
                classNames={s}
                position='bottom'
                key={activeMenu}
                closeOnItemClick
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
                            <Group gap='xs' wrap='nowrap' style={{ overflow: 'hidden' }}>
                                <Paper p={10} radius='sm' bg='violet.1'>
                                    <Center>{icons[activeMenu]}</Center>
                                </Paper>
                                <Text ta='start' truncate='end' fz={20} fw='bold'>
                                    {activeMenu}
                                </Text>
                            </Group>
                            <CaretDown style={{ flex: '0 1 32px' }} color='var(--mantine-color-dark-9)' size={20} />
                        </Group>
                    </Button>
                </Menu.Target>

                <Menu.Dropdown w='auto'>
                    {content.map((title) => (
                        <Menu.Item
                            leftSection={
                                <Paper p='xxs' radius='xs' bg='violet.1'>
                                    <Center className={s.dropdownIcon}>{icons[title]}</Center>
                                </Paper>
                            }
                            key={title}
                        >
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/* @ts-expect-error mistypes */}
                            <Link spy hashSpy offset={-100} to={title} onSetActive={setActiveMenu}>
                                <Text span inline fz={14} fw='bold'>
                                    {title}
                                </Text>
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu.Dropdown>
            </Menu>
        </InnerContainer>
    );
};
