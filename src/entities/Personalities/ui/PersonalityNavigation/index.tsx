import type { ComponentProps } from 'react';
import { Button, Menu, Stack, Text, Title } from '@mantine/core';
import { ArrowLeft } from '@phosphor-icons/react';
import { useUnit } from 'effector-react';

import { getPersonalityTypesWithCategoriesQuery } from '@/entities/Personalities';

import { NavigationItems } from './NavigationItems';
import s from './PersonalityNavigation.module.css';

interface PersonalityNavigationProps extends ComponentProps<'div'> {
    onClick?: VoidFunction;
    onClickBack?: VoidFunction;
}

export const PersonalityNavigation = ({
    onClick,
    onClickBack,
    onMouseLeave,
    onMouseEnter,
}: PersonalityNavigationProps) => {
    const { data } = useUnit(getPersonalityTypesWithCategoriesQuery);

    if (!data) return null;

    return (
        <Stack onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
            <Menu.Dropdown className={s.dropdown}>
                <Button
                    size='md'
                    c='dark.7'
                    hiddenFrom='sm'
                    variant='subtle'
                    onClick={onClickBack}
                    leftSection={<ArrowLeft size={24} />}
                >
                    Назад
                </Button>
                <Stack pos='relative' gap={40}>
                    {data?.map((item) => (
                        <Menu.Item component='div' key={item.category}>
                            <Title mb='xs' fz={20} order={3}>
                                {item.category}
                            </Title>
                            <Text mb='xl' fz={18}>
                                {item.description}
                            </Text>
                            <NavigationItems category={item.category} onClick={onClick} items={item.types} />
                        </Menu.Item>
                    ))}
                </Stack>
            </Menu.Dropdown>
        </Stack>
    );
};
