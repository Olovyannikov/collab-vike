import { Burger, Drawer, Group, Image, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePageContext } from 'vike-react/usePageContext';

import logoUrl from '@/app/assets/cognitive-logo.svg';
import { APP_ROUTES } from '@/shared/navigation';

import s from './Header.module.css';

export const Header = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const pageContext = usePageContext();
    const { urlPathname } = pageContext;
    const isActive = ({ href }: { href: string }) =>
        href === '/' ? urlPathname === href : urlPathname.startsWith(href);

    const items = APP_ROUTES.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={s.link}
            onClick={close}
            {...(isActive({ href: link.link }) ? { 'data-active': true } : {})}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <a className={s.logo} href='/'>
                    <Image src={logoUrl} height={20} width={125} alt='Cognitive Lab логотип' />
                </a>
                <Group w='100%' gap={5} visibleFrom='sm'>
                    {items}
                </Group>
                <Drawer hiddenFrom='sm' opened={opened} onClose={close} size='75%'>
                    <Stack gap={5}>{items}</Stack>
                </Drawer>
                <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
            </div>
        </header>
    );
};
