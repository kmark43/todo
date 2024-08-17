import React from "react";

type GreetProps = {
    name: string;
    children?: React.ReactNode;
};

export const Greet = (props: GreetProps) => {
    return (
        <div>
           <h1>Hello, {props.name}!</h1>
           <div>{props.children}</div>
        </div>
    );
}