import { FC, useState } from "react";

import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";
import { Modal } from "shared/ui/Modal/ui/Modal";

import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = () => setIsAuthModal(prev => !prev);

    return (
        <div className={classNames(cls.navbar)}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t("log-in")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t("test")}
            </Modal>
        </div>
    );
};