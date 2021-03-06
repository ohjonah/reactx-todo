import { observer } from 'mobx-react';
import * as React from 'react';

export interface ITodoHeaderProps {
    title: string;
}

export const TodoHeader = observer((props: ITodoHeaderProps) => {

    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    );
});
