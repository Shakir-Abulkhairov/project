import {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextPropType} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider:FC = ({children}) =>{
    const [theme,setTheme] = useState<Theme>(defaultTheme)

    const defaultPropsTheme = useMemo<ThemeContextPropType>(()=>{
        return {
            theme,
            setTheme
        }
    },[theme])

    return <ThemeContext.Provider value={defaultPropsTheme}>
        {children}
    </ThemeContext.Provider>
}