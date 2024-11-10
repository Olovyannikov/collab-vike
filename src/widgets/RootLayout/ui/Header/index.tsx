import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePageContext } from 'vike-react/usePageContext';

import logoUrl from '@/app/assets/logo.svg';
import { APP_ROUTES } from '@/shared/navigation';

import s from './Header.module.css';

export const Header = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const pageContext = usePageContext();
    const { urlPathname } = pageContext;
    const isActive = ({ href }: { href: string }) =>
        href === '/' ? urlPathname === href : urlPathname.startsWith(href);

    const items = APP_ROUTES.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={s.link}
            {...(isActive({ href: link.link }) ? { 'data-active': true } : {})}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={s.header}>
            <Container size='md' className={s.inner}>
                <a href='/'>
                    <img src={logoUrl} height={64} width={64} alt='logo' />
                </a>
                <Group gap={5} visibleFrom='xs'>
                    {items}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
            </Container>
        </header>
    );
};
