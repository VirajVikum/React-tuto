import { createContext } from "react";

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#eeeeee',
        background: '#000000'
    },
}

export const ThemeContext = createContext(themes);