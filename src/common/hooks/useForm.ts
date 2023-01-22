import {useState} from 'react';

export const useForm = <T,>(callback: (values: T) => void, initialState: T) => {

    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValues(initialState);
        callback(values);
    }

    return {
        onChange,
        onSubmit,
        values
    };
}