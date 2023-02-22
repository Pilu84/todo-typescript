import React, { useCallback } from 'react';
import { useForm } from '../../common/hooks/useForm';

export interface TodoListProps {
    readonly todoListData: Map<number, string> | null;
    readonly setTodoList: (data: string) => void;
}

export interface ListData {
    listName: string | null;
}

export const TodoList = React.memo((props: TodoListProps) => {

    const listData = props.todoListData ? Array.from(props.todoListData.values()) : [];

    const initialState: ListData = {
        listName: ''
    };

    const setTodo = useCallback((data: ListData) => {
        props.setTodoList(data.listName ?? '');
    },
        [props]
    );

    // const { onChange, onSubmit } = useForm(setTodo, initialState);

    const form = useForm(setTodo, initialState);

    return (
        <>
            {listData && listData.length !== 0 &&
                listData.map((data, keys) => {
                    return (
                        <div
                            key={keys}
                        >
                            <p>{data}</p>

                        </div>
                    )
                })
            }

            <input type='text' aria-label='Name' name='listName' id='listName' onChange={form.onChange} placeholder={'List name'} />
            <button type='submit' onClick={form.onSubmit}>Save</button>


        </>
    );
});
