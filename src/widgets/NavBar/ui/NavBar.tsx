import { classNames } from 'shared/lib/classNames';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?:string
}
export function NavBar({ className }:NavBarProps) {
    console.log(classNames('test', { hovered: true, isActive: true }, ['additional']));
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
}
