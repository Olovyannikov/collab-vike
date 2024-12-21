import { Container } from '@mantine/core';

import s from './InnerContainer.module.css';

export const InnerContainer = Container.withProps({
    className: s.container,
});
