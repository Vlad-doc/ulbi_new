import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { AppLink } from "shared/ui/AppLink";

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <AppLink
                    to='/'
                    theme={AppLinkTheme.PRIMARY}
                    className={classNames(cls.mainLink)}
                >
                    Главная
                </AppLink>
                <AppLink
                    to='/about'
                    theme={AppLinkTheme.PRIMARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};