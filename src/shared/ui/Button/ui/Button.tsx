import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
};

export const Button: FC<ButtonProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls.clear])}
            {...props}      
        >
            {children}
        </button>
    );
};