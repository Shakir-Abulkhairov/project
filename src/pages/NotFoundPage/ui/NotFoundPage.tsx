import cls from './NotFoundPage.module.scss';
import {classNames} from "shared/lib/classNames";
import {useTranslation} from "react-i18next";


interface MotFoundPageProps {
    className?:string
}
export const NotFoundPage = ({className}:MotFoundPageProps)=>{
    const { t } = useTranslation();
    return(
        <div className={classNames(cls.NotFoundPage,{},[className])}>
            404 {t('Страница не найдена')}
        </div>
    )
}