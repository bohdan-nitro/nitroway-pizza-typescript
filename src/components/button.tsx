import React, { ReactNode, FC } from "react";

import classNames from "classnames";

export interface IButton  {
    onClick: () => void,
    className: string,
    outline: boolean,
    children: JSX.Element | JSX.Element[]
}

const Button: FC<IButton> = ({onClick, className, outline, children }) => {

    return (
    <button
        onClick={onClick}
        className={classNames("button", className,  {
        "button--outline" : outline,
    })}>{children}</button>

    );
};

export default Button;