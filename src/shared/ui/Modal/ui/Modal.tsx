import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "shared/ui/Portal";

import cls from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
    const [isClosed, setIsClosed] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosed(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosed(false);
            }, 300);
        }
    }, [onClose]);

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeHandler();
            }
        }
        , [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosed,
        [cls[theme]]: true,
    };
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler} >
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};