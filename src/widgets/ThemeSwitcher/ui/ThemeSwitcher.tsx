import {classNames} from "shared/lib/classNames";
import {FC} from "react";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import LightIcon from 'shared/assets/icons/light.svg'
import MoonIcon from 'shared/assets/icons/moon.svg'

interface ToggleSwitcherProps{
    className?:string
}


export const ThemeSwitcher:FC<ToggleSwitcherProps> = (props)=>{
    const {toggleTheme,theme } = useTheme()

    const {className,...otherProps} = props
    return(
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            {...otherProps}
            className={classNames('',{},[className])}>
            {theme === Theme.DARK ? <LightIcon width={'30px'}/> : <MoonIcon width={'30px'}/>}
        </Button>
    )
}