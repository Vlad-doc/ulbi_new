import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = () => (
    <div className={classNames(cls.navbar)}>
        <div className={cls.links}>
        </div>
    </div>
);