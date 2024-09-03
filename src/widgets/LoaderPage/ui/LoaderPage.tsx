import cls from './LoaderPage.module.scss';
import {classNames} from "shared/lib/classNames";
import {Loader} from "shared/ui/Loader/Loader";

interface LoaderPageProps {
    className?:string
}
export const LoaderPage = ({className}:LoaderPageProps)=>{
    return(
        <div className={classNames(cls.LoaderPage,{},[className])}>
            <Loader/>
        </div>
    )
}