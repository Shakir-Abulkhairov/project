import { classNames } from 'shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string
    theme?:ButtonTheme
    square?:boolean
    size?:ButtonSize
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        square,
        size= ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button {...otherProps} className={classNames(cls.Button, { [cls.square]: square }, [className, cls[theme], cls[size]])}>
            {children}
        </button>
    );
};
