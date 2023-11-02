import { useTranslations } from 'next-intl';

export default function Balance(){
    const t = useTranslations('Navbar');

    return <h1>{t('balance')}</h1>
}