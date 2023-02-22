import React from 'react';


export interface SimpleButtonProps {
    readonly label: string | null;
    readonly onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export const SimpleButton = React.memo((props: SimpleButtonProps) => {

    return (
        <button
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );

})