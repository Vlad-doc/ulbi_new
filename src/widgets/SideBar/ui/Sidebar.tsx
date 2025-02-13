import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed })}>
            <button onClick={toggleCollapsed}>Collapse</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};