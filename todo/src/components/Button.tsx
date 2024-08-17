import { useState } from 'react';

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}
