import './Loader.scss';
import { classNames } from 'shared/lib/classNames';

interface LoaderProps {
    className?:string
}
export function Loader({ className }:LoaderProps) {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
