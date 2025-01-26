import { ComponentProps } from 'react';

import { Dropdown } from './Dropdown';

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
    return (
        <Dropdown onClick={onClick} onClickBack={onClickBack} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} />
    );
};
