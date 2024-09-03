import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?:string
}
export const Sidebar = ({className}:SidebarProps)=>{
    const [collapsed,setCollapsed] = useState<boolean>(false)
    const toddleCollapsed = () =>{
        setCollapsed(prev => !prev)
    }
    return(
        <div data-testid='sidebar' className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
            <button data-testid='sidebar-toggle' onClick={toddleCollapsed}>toggle</button>
           <div className={cls.switchers}>
               <ThemeSwitcher/>
               <LangSwitcher className={cls.lang}/>
           </div>
        </div>
    )
}