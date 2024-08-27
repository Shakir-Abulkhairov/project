import {classNames} from "shared/lib/classNames";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?:string
}
export const LangSwitcher = ({className}:LangSwitcherProps)=>{
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () =>
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

    return(
        <Button onClick={toggleLanguage} theme={ButtonTheme.CLEAR} className={classNames('',{},[className])}>
            {t('Язык')}
        </Button>
    )
}