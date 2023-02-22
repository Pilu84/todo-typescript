import React, { useCallback, useState } from 'react';
import { TodoList } from './ToDoList';

// tslint:disable-next-line: no-empty-interface
export interface TodoListContainerProps {
}


export const TodoListContainer = (React.memo((_props: TodoListContainerProps) => {

    const [listData, setListData] = useState<Map<number, string>>(new Map());

    const setTodoList = useCallback((data: string) => {

        const current = listData
        const id = current.size + 1;
        current.set(id, data);
        setListData(current);

    },
        [listData]
    );

    return (
        <TodoList
            todoListData={listData}
            setTodoList={setTodoList}
        />
    );
}));
