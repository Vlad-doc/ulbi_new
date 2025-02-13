import { FC } from "react";

import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Button } from "shared/ui/Button";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <Button onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}         
        </Button>
    );
};