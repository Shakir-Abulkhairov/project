import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?:string
}
export function NavBar({ className }:NavBarProps) {
    console.log(classNames('test', { hovered: true, isActive: true }, ['additional']));
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.red}>main</AppLink>
                <AppLink to="/about" className={cls.red}>
                    about
                </AppLink>
            </div>
        </div>
    );
}
