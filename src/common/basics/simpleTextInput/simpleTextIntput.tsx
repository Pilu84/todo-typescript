import { SyntheticEvent, useCallback, useState } from "react";

export interface SimpleTextInputProps {
    label: string | null;
    name: string;
    getFormData: (value: any) => void;
}

export const SimpleTextInput = (props: SimpleTextInputProps) => {

    const [fieldValue, setFieldValue] = useState<string>('');

    const onChange = useCallback((event: SyntheticEvent<HTMLInputElement>) => {

        const value: string = event.currentTarget.value;
        setFieldValue(value);

        props.getFormData(event);

    },
        [setFieldValue, props]
    );


    return (
        <input
            type={'text'}
            name={props.name}
            id={props.name}
            onChange={onChange}
            placeholder={props.label ?? ''}
            value={fieldValue}
        />
    );
};
