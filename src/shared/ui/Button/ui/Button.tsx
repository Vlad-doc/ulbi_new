import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
};

export const Button: FC<ButtonProps> = ({
    children,
    className,
    theme,
    ...props
}) => (
    <button
        className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
        {...props}
    >
        {children}
    </button>
);