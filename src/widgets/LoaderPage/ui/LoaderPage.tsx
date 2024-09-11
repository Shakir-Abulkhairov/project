import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoaderPage.module.scss';

interface LoaderPageProps {
    className?:string
}
export function LoaderPage({ className }:LoaderPageProps) {
    return (
        <div className={classNames(cls.LoaderPage, {}, [className])}>
            <Loader />
        </div>
    );
}
