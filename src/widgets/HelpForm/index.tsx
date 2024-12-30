import { Textarea } from '@mantine/core';

import { MainButton } from '@/shared/ui';
import { FormWrapper } from '@/widgets/FormWrapper';
import { FormInput } from '@/widgets/FormWrapper/FormInput';

import { useHelpFormViewModel } from './viewmodel';

export const HelpForm = () => {
    const { nameProps, themeProps, emailProps, questionProps, onSubmit } = useHelpFormViewModel();

    return (
        <FormWrapper onSubmit={onSubmit}>
            <FormInput {...nameProps} />
            <FormInput {...themeProps} />
            <FormInput {...emailProps} />
            <Textarea {...questionProps} />
            <MainButton type='submit' fullWidth>
                Отправить
            </MainButton>
        </FormWrapper>
    );
};
