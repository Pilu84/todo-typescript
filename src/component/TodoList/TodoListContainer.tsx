import React, { useCallback, useState } from 'react';
import { TodoList } from './ToDoList';

export interface TodoListContainerProps {
}


export const TodoListContainer = (React.memo((_props: TodoListContainerProps) => {
    
    const [listData, setListData] = useState<Map<number, string> | null>(null)
    
    const setTodoList = useCallback((data: string) => {
        
            const current = listData ? listData : new Map();
            const id = current.size + 1;
            current.set(id, data);
            setListData(current);

    },
     [listData]
    )

    return (
        <TodoList
            todoListData={listData}
            setTodoList={setTodoList}
        />
    )
}));