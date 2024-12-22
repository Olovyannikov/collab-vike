import { useState } from 'react';
import { Link } from 'react-scroll';
import { Button, Center, Group, Menu, Paper, Text } from '@mantine/core';
import { CaretDown } from '@phosphor-icons/react';
import { useStoreMap } from 'effector-react';
import { useUnit } from 'effector-react';

import { $freeContent, $navigationIconMap } from '@/entities/PersonalityTypes';
import { InnerContainer } from '@/shared/ui';

import s from './ReportNavigation.module.css';

export const ReportNavigation = () => {
    const content = useStoreMap({
        store: $freeContent,
        keys: ['title'],
        fn: (content) => content.map(({ title }) => title),
    });

    const icons = useUnit($navigationIconMap);

    const [activeMenu, setActiveMenu] = useState(content[0]);

    console.log({ content });

    console.log({ activeMenu });

    return (
        <InnerContainer style={{ zIndex: 1000 }} pos='sticky' top={0} py={20} mb={32} bg='white'>
            <Menu closeOnItemClick keepMounted key={activeMenu} classNames={s}>
                <Menu.Target>
                    <Button px={0} size='lg' variant='transparent' classNames={s} fullWidth justify='flex-start'>
                        <Group gap={0} w='100%' justify='space-between' wrap='nowrap' align='center'>
                            <Group gap='xs' wrap='nowrap'>
                                <Paper p={10} radius='sm' bg='violet.1'>
                                    <Center>{icons[activeMenu]}</Center>
                                </Paper>
                                <Text ta='start' truncate='end' w='29ch' fz={20} fw='bold'>
                                    {activeMenu}
                                </Text>
                            </Group>
                            <CaretDown color='var(--mantine-color-dark-9)' size={20} />
                        </Group>
                    </Button>
                </Menu.Target>

                <Menu.Dropdown>
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
                            <Link spy hashSpy offset={-50} to={`${title}`} onSetActive={setActiveMenu}>
                                <Text fz={14} fw='bold'>
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
