import { SyntheticEvent, useState } from 'react';

export const useForm = <T,>(callback: (values: T) => void, initialState: T) => {

    const [values, setValues] = useState(initialState);

    const onChange = (event: SyntheticEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.currentTarget.name]: event.currentTarget.value });
    };

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        setValues(initialState);
        callback(values);
    };

    return {
        onChange,
        onSubmit,
        values
    };
};
