import React, { SyntheticEvent, useCallback, useState } from 'react';
import { SimpleButton } from '../../common/basics/simpleBtn/simpleButton';
import { SimpleTextInput } from '../../common/basics/simpleTextInput/simpleTextIntput';


export interface TodoListProps {
    readonly todoListData: Map<number, string> | null;
    readonly setTodoList: (data: string) => void;
}

export interface ListData {
    listName: string | null;
    listName2: string | null;
}

export interface FormList {
    [index: string]: string;
}

export const TodoList = React.memo((props: TodoListProps) => {

    const listData = props.todoListData ? Array.from(props.todoListData.values()) : [];

    const [baseData, setBaseData] = useState<FormList>({});

    const setData = useCallback((event: SyntheticEvent<HTMLInputElement>) => {

        const data = {
            [event.currentTarget.name]: event.currentTarget.value
        };

        setBaseData(data);
    },
        [setBaseData]
    );

    const getData = useCallback((event: SyntheticEvent) => {
        event.preventDefault();

        console.log('a baseDAta a formban: ', baseData);

        if (baseData) {
            props.setTodoList(baseData.listName);
        }
    },
        [baseData, props]
    );

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
                    );
                })
            }

            <SimpleTextInput
                label={'List Name'}
                name={'listName'}
                getFormData={setData}
            />

            <SimpleButton
                onClick={getData}
                label={'Save'}
            />


        </>
    );
});
