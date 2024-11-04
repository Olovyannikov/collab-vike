import { FormEventHandler } from 'react';
import { Container } from '@mantine/core';
import { useUnit } from 'effector-react';
import { useData } from 'vike-react/useData';

import { getCommentsQuery } from '@/entities/Comments/api';
import type { CommentsResponse } from '@/entities/Comments/api/dto';

import { $error, $name, $text, formSubmitted, nameChanged, textChanged } from '~/pages/comments/model';

export default function Page() {
    const initialComments = useData<CommentsResponse[]>();
    const { data } = useUnit(getCommentsQuery);
    const [name, text, onChangeName, onChangeText, formSubmit, error] = useUnit([
        $name,
        $text,
        nameChanged,
        textChanged,
        formSubmitted,
        $error,
    ]);

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        formSubmit();
    };

    const comments = data ?? initialComments;

    return (
        <Container>
            <h1>Comments Page</h1>
            Comments:
            <ul>{comments?.map((question) => <li key={question.id}>{question.text}</li>)}</ul>
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                Name: <input value={name} onChange={(e) => onChangeName(e.target.value)} name='name' type='text' />
                <br />
                Text: <textarea value={text} onChange={(e) => onChangeText(e.target.value)} name='text' rows={4} />
                <br />
                <button type='submit'>CreateComment</button>
            </form>
            {error && 'Что-то пошло не так'}
        </Container>
    );
}
