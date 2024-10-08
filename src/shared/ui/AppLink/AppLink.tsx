import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?:string
    theme?:AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        className, to, children, theme = AppLinkTheme.PRIMARY, ...other
    } = props;

    return (
        <Link
          to={to}
          className={classNames(cls.AppLink, {}, [className, cls[theme]])}
          {...other}
        >
            {children}
        </Link>
    );
};
