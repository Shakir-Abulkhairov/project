import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');
    return <div>{t('Об этом')}</div>;
}

export default AboutPage;
